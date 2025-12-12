const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');
const mainColor = document.getElementById('main-color');

// Função geradora de cor RGB
function generateRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', function () {
  const rgbColor = generateRgbColor();
  mainColor.style.backgroundColor = rgbColor;
  color.textContent = rgbColor;
});
