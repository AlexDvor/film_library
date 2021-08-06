import HeaderLibTpl from '../templates/header-lib.hbs';
import HeaderHomeTpl from '../templates/header-home.hbs';



const linkMyLibraryRef =   document.querySelector('.js-link-library')
const linkMyHomeRef =  document.querySelector('.js-link-home')
const headerSectionRef = document.querySelector('header')


linkMyLibraryRef.addEventListener('click', onClickLib)
linkMyHomeRef.addEventListener('click', onClickHome)



function onClickLib() {
  
    const headerLib = HeaderLibTpl()
    // headerSectionRef.innerHTML = ''
    headerSectionRef.innerHTML = headerLib;
    console.log(headerSectionRef)
    console.log('home')
   
  
   
}

function onClickHome() {
    //   const headerHome = HeaderHomeTpl()
    //   headerSectionRef.innerHTML = headerHome;
    console.log("lib")

}

