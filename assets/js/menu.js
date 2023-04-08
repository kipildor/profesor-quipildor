const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
  mainMenuElement.classList.toggle('main-menu--show');
});

const dropdown = document.getElementById('dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdown.addEventListener('click', () => {
  dropdownMenu.classList.toggle('dropdown-menu--show');
});