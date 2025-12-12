const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');
const mainColor = document.getElementById('main-color');

// Função geradora de cor HSL
function generateHslColor() {
  const h = Math.floor(Math.random() * 360); // Matiz
  const s = Math.floor(Math.random() * 100); // Saturação
  const l = Math.floor(Math.random() * 100); // Luminosidade
  return `hsl(${h}, ${s}%, ${l}%)`;
}

btn.addEventListener('click', function () {
  const hslColor = generateHslColor();
  mainColor.style.backgroundColor = hslColor;
  color.textContent = hslColor;
});
