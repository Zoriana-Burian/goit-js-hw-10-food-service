import menuEl from './menu.json';
import menuTemplates from './templates/menu.hbs';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.js-menu'),
  switch: document.querySelector('theme-switch__toggle')
};

