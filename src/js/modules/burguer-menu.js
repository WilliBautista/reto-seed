const btnMenu = document.getElementById('main-menu-hamburguer');
const mainMenu = document.getElementById('main-menu');

const burguerMenu = () => {
  btnMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('main-menu--open');
  });
};

export default burguerMenu;
