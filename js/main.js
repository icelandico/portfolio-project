const hamburgerIcon = document.querySelector('.hamburger-icon');
const navigationList = document.querySelector('.navigation-list');
const socialIcon = document.querySelector('.social');
const socialIconsList = document.querySelector('.social-list-item');
const hamburgerBars = Array.from(document.querySelectorAll('.bar'));

socialIcon.addEventListener('click', function() {
  if (socialIconsList.classList.contains('show')) {
    socialIconsList.style.display = 'none';
    socialIconsList.classList.remove('show');
  } else  {
    socialIconsList.style.display = 'inline-flex';
    socialIconsList.classList.add('show');
  }
});

hamburgerIcon.addEventListener('click', function() {
  hamburgerBars.forEach(bar => bar.classList.toggle('active'));
  navigationList.classList.toggle('closed')
});




