import menuEl from './menu.json';
import menuTemplates from './templates/menu.hbs';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
  switch: document.querySelector('.theme-switch__toggle')
};

const menuMarkup = createMenu(menuEl);

refs.menu.insertAdjacentHTML('afterbegin', menuMarkup);


function createMenu(item) {
  return item.map(menuTemplates).join('');
}




refs.switch.addEventListener('change', onSetTheme);

function onSetTheme(evt){

   if(evt.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT); 
    
    localStorage.setItem('theme', Theme.DARK)
   } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    
    localStorage.setItem('theme', Theme.LIGHT)
  } 

}

getLocalStorage()

function getLocalStorage() {
  const themeLocSt = localStorage.getItem('theme');
  if (themeLocSt === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  }
}




