import refs from './refs'

refs.linkMyLibrary.addEventListener('click', onClickLib);
refs.linkMyHome.addEventListener('click', onClickHome);

function onClickLib() {
    refs.searchForm.classList.add('is-closed');
    refs.headerButtons.classList.replace('is-closed', 'is-open');
    refs.headerBackgroundImage.classList.replace('header-background-img', 'header-background-img-lib');
    refs.linkMyHome.classList.remove('nav-menu__link--current-page');
    refs.linkMyLibrary.classList.add('nav-menu__link--current-page');
}

function onClickHome() {
    refs.searchForm.classList.remove('is-closed');
    refs.headerButtons.classList.replace('is-open', 'is-closed');
    refs.headerBackgroundImage.classList.replace('header-background-img-lib', 'header-background-img')
    refs.linkMyLibrary.classList.remove('nav-menu__link--current-page');
    refs.linkMyHome.classList.add('nav-menu__link--current-page');
}

