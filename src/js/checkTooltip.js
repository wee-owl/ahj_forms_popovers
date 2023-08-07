import checkPosition from './checkPosition';

export default function checkTooltip(e) {
  const btnCoords = e.target.getBoundingClientRect();
  const btnWidth = e.target.offsetWidth;
  const btnHeight = e.target.offsetHeight;
  checkPosition(btnCoords, btnWidth, btnHeight);
}
