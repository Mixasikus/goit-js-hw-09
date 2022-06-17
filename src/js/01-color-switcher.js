const refs = {
  bodyEl: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

const PROMPT_DELAY = 1000;

refs.start.addEventListener('click', () => {
  const intervalId = setInterval(() => {
    getRandomHexColor();

    refs.stop.addEventListener('click', () => {
      clearInterval(intervalId);
      refs.stop.setAttribute('disabled', true);
      refs.start.removeAttribute('disabled');
    });
  }, PROMPT_DELAY);
  refs.start.setAttribute('disabled', true);
  refs.stop.removeAttribute('disabled');
});

// refs.stop.setAttribute('disabled', true);
refs.start.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  refs.bodyEl.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}
