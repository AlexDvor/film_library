import Refs from './refs'

Refs.linkMyLibraryRef.addEventListener('click', onClickLib);
Refs.linkMyHomeRef.addEventListener('click', onClickHome);

function onClickLib() {
    Refs.searchFormRef.classList.add('is-closed');
    Refs.headerButtonsRef.classList.replace('is-closed', 'is-open');
    Refs.headerBackgroundImageRef.classList.replace('header-background-img', 'header-background-img-lib');
    Refs.linkMyHomeRef.classList.remove('nav-menu__link--current-page');
    Refs.linkMyLibraryRef.classList.add('nav-menu__link--current-page');
}

function onClickHome() {
    Refs.searchFormRef.classList.remove('is-closed');
    Refs.headerButtonsRef.classList.replace('is-open', 'is-closed');
    Refs.headerBackgroundImageRef.classList.replace('header-background-img-lib', 'header-background-img')
    Refs.linkMyLibraryRef.classList.remove('nav-menu__link--current-page');
    Refs.linkMyHomeRef.classList.add('nav-menu__link--current-page');
}

