const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.span-color');
const mainColor = document.getElementById('main-color');

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumbers();
  mainColor.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumbers() {
  return Math.floor(Math.random() * colors.length);
}
