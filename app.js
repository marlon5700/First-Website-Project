const menu = document.querySelector('#mobile-menu')

const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
      
})

let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resizing');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resizing');
  }, 100);
  

});


