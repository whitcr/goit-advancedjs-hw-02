// js/01-color-switcher.js

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;
let interval;

startButton.addEventListener('click', startColor);
stopButton.addEventListener('click', stopColor);

function startColor() {
  startButton.disabled = true;
  stopButton.disabled = false;
  interval = setInterval(changeBody, 1000);
}

function stopColor() {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(interval);
}

function changeBody() {
  body.style.backgroundColor = getRandomHexColor();
}
