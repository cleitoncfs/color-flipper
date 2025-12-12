const btn = document.getElementById('btn');
const copyBtn = document.getElementById('copy-btn');

const hexValue = document.getElementById('hex-value');
const rgbValue = document.getElementById('rgb-value');
const hslValue = document.getElementById('hsl-value');

const mainColor = document.getElementById('main-color');
const historyContainer = document.getElementById('history');

let history = [];

// Gera HEX
function generateHexColor() {
  const hexa = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += hexa[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// Converte HEX → RGB
function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

// Converte RGB → HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h, s;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const diff = max - min;

    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / diff + 2;
        break;
      case b:
        h = (r - g) / diff + 4;
        break;
    }

    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
    l * 100
  )}%)`;
}

// Atualiza histórico
function updateHistory(color) {
  history.unshift(color);
  history = history.slice(0, 6);

  historyContainer.innerHTML = '';

  history.forEach((c) => {
    const box = document.createElement('div');
    box.style.width = '40px';
    box.style.height = '40px';
    box.style.borderRadius = '6px';
    box.style.background = c;
    box.style.cursor = 'pointer';
    box.title = c;

    box.onclick = () => {
      mainColor.style.backgroundColor = c;
      hexValue.textContent = c;
      rgbValue.textContent = hexToRgb(c);
      const [r, g, b] = hexToRgb(c).match(/\d+/g).map(Number);
      hslValue.textContent = rgbToHsl(r, g, b);
    };

    historyContainer.appendChild(box);
  });
}

// Evento principal
btn.addEventListener('click', () => {
  const hex = generateHexColor();
  const rgb = hexToRgb(hex);
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  const hsl = rgbToHsl(r, g, b);

  mainColor.style.backgroundColor = hex;

  hexValue.textContent = hex;
  rgbValue.textContent = rgb;
  hslValue.textContent = hsl;

  updateHistory(hex);
});

// Copiar HEX
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(hexValue.textContent);
  copyBtn.textContent = 'Copiado!';
  setTimeout(() => (copyBtn.textContent = 'Copiar HEX'), 1500);
});
