import './sass/main.scss';
import '../node_modules/modern-normalize/modern-normalize.css';
import './js/modal-window';

import CardTpl from './templates/header-lib.hbs';

const navMenu = document.querySelector('.nav-menu__link')
const menu = document.querySelector('header')
console.log(menu)

navMenu.addEventListener('click', onClick)

function onClick() {
  
    const res = CardTpl()
    menu.innerHTML = ''
    menu.insertAdjacentHTML('beforeend', res)
   
}


