import { renderUserData } from './controller';

const startRender = () => {  
  const rootEl = document.getElementById('root');
  renderUserData(rootEl);
};

window.addEventListener('load', () => {
  window.location = '#/';
  startRender(); 
});

window.addEventListener('hashchange', () => {
  startRender(); 
});

