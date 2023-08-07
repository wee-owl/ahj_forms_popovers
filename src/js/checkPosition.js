import { tooltip } from './const';

export default function checkPosition(coords, width, height) {
  if (!tooltip) return;
  tooltip.classList.toggle('some__tooltip-active');
  let left = coords.left + (width - tooltip.offsetWidth) / 2;
  if (left < 0) left = 0;
  let top = coords.top - tooltip.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + height + 5;
  }
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}
