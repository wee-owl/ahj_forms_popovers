import { button } from './const';
import checkTooltip from './checkTooltip';

button.addEventListener('click', (e) => {
  e.preventDefault();
  checkTooltip(e);
  button.removeEventListener('click', () => {
    checkTooltip(e);
  });
});
