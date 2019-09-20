(function() {
  const menu = document.querySelector('.menu__list');
  const burger = document.querySelector('.burger');
  let openMenu = false;
  
  burger.addEventListener('click', (event) => {
    if (openMenu) {
      menu.classList.add('menu_hide');
      openMenu = false;
    } else {
      menu.classList.remove('menu_hide');
      openMenu = true;
    }
    burger.classList.toggle('burger_rotate');
  });
})();