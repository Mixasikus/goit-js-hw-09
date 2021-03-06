import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  resetBtn: document.querySelector('[data-reset]'),
  btn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.btn.disabled = true;

const currentTime = Date.now();
let timeDifference = null;
let endOfTime = null;
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate(selectedDates[0]);
  },
};

flatpickr(refs.input, options);

const selectedDate = selectTime => {
  if (!refs.btn.disabled) {
    return;
  } else {
    endOfTime = selectTime.getTime();
    timeDifference = endOfTime - currentTime;
    if (timeDifference <= 0) {
      Notiflix.Notify.failure('Пожалуйста выберите дату из будущего');
      return;
    } else {
      refs.btn.disabled = false;
      return endOfTime;
    }
  }
};

refs.btn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const timeStart = Date.now();
    timeDifference = endOfTime - timeStart;
    const time = convertMs(timeDifference);

    refs.days.textContent = time.days;
    refs.hours.textContent = time.hours;
    refs.minutes.textContent = time.minutes;
    refs.seconds.textContent = time.seconds;
  }, 1000);
  Notiflix.Notify.success('Таймер запущен');
});

refs.resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.btn.disabled = true;
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
  Notiflix.Notify.success('Таймер остановлен');
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
