const hamburgerIcon = document.querySelector('.hamburger-icon');
const navigationList = document.querySelector('.navigation-list');
const socialIcon = document.querySelector('.social');
const socialIconsList = document.querySelector('.social-list-item');

hamburgerIcon.addEventListener('click',function(){
  if (navigationList.classList.contains('active')){
    navigationList.style.display = 'none';
    navigationList.classList.remove('active');
  }
  else{
    navigationList.style.display = 'flex';
    navigationList.classList.add('active');
  }
});

socialIcon.addEventListener('click', function() {
  if (socialIconsList.classList.contains('show')) {
    socialIconsList.style.display = 'none';
    socialIconsList.classList.remove('show');
  } else  {
    socialIconsList.style.display = 'inline-flex';
    socialIconsList.classList.add('show');
  }
});


