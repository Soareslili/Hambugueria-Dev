const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.Nav-Menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})