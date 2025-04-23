  const toggle = document.getElementById('menu');
  const nav = document.querySelector('.barra_nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
