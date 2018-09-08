import { renderUserData } from './controller';

window.addEventListener('load', () => {
  window.location = '#/';
});

window.addEventListener('hashchange', () => {
  const rootEl = document.getElementById('root');
  renderUserData(rootEl);
});

