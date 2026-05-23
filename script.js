const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
const themeBtn = document.querySelector('.theme-btn');

filters.forEach(button => {
  button.addEventListener('click', () => {

    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const text = button.textContent;

    cards.forEach(card => {

      if (text === 'All') {
        card.style.display = 'block';
      }

      else if (text === 'Active') {
        if (card.classList.contains('active-card')) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }

      else if (text === 'Inactive') {
        if (card.classList.contains('inactive-card')) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
    });
  });
});

const removeButtons = document.querySelectorAll('.remove-btn');

removeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.card').remove();
  });
});

themeBtn.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    themeBtn.innerHTML = '<img src="icon-sun.svg">';
  } else {
    themeBtn.innerHTML = '<img src="icon-moon.svg">';
  }
});
