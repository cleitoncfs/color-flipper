const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');
const mainColor = document.getElementById('main-color');

btn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomNumber];

  mainColor.style.backgroundColor = selectedColor;
  color.textContent = selectedColor;
});
