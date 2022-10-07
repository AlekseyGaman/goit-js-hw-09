const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    getRandomHexColor();
  }, 1000);
  if ((startBtn.disabled = true)) {
    stopBtn.disabled = false;
  }
  console.log(`Start - !`);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  if ((stopBtn.disabled = true)) {
    startBtn.disabled = false;
  }
  console.log(`Stop!`);
});
