const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');
const mainColor = document.getElementById('main-color');

btn.addEventListener('click', function () {
  let hexaColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexa.length);
    hexaColor += hexa[randomIndex];
  }

  mainColor.style.backgroundColor = hexaColor;
  color.textContent = hexaColor;
});
