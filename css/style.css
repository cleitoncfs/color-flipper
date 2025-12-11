const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');
const mainColor = document.getElementById('main-color');

// Função geradora de cor HEX
function generateHexColor() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += hexa[Math.floor(Math.random() * hexa.length)];
  }
  return hex;
}

btn.addEventListener('click', function () {
  const hexColor = generateHexColor();
  mainColor.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
