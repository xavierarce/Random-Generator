var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var randombtn = document.getElementById('btnrandom');

function generateRandomColor() {
  var symbols, color;
  symbols = '0123456789ABCDEF';

  color = '#';
  for (var i = 0; i < 6; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  return color
}

function pickaColor() {
  color1.value = generateRandomColor();
  color2.value = generateRandomColor();
}

function setBackground() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = `Right Side: ${hexToRgb(color1.value)} & Left Side: ${hexToRgb(color2.value)}`;
}

function setColors() {
  pickaColor();
  setGradient();
}

function setGradient() {
  setBackground();
}

// function buttonColor() {
//   randombtn.style.backgroundColor = '#FC4F00';
//   setTimeout(() => {
//     randombtn.style.backgroundColor = '#4CAF50';
//   }, 500);
// }

function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}
  

// randombtn.addEventListener('click', buttonColor)
document.addEventListener('DOMContentLoaded', setColors);
color1.addEventListener("input", setGradient);
color2.addEventListener('input', setGradient);
randombtn.addEventListener('click', setColors);
