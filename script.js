// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
  
    toggleButton.addEventListener('click', function() {
      menu.classList.toggle('menu-open');
      overlay.classList.toggle('overlay-open');
  
      // Move the navbar element to the top of the stacking order
      if (menu.classList.contains('menu-open')) {
        menu.style.zIndex = "9999";
      } else {
        menu.style.zIndex = "";
      }
    });
  
    overlay.addEventListener('click', function() {
      menu.classList.remove('menu-open');
      overlay.classList.remove('overlay-open');
      menu.style.zIndex = "";
    });
  });
  