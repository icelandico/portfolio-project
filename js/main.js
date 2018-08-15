const hamburgerIcon = document.querySelector('.hamburger-icon');
const navigationList = document.querySelector('.navigation-list');
const socialIcon = document.querySelector('.social');
const hamburgerBars = Array.from(document.querySelectorAll('.bar'));

hamburgerIcon.addEventListener('click', function() {
  hamburgerBars.forEach(bar => bar.classList.toggle('active'));
  navigationList.classList.toggle('closed')
});


socialIcon.addEventListener('click', function() {
  navigationList.classList.toggle('shift')
});



