import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDataTime: document.querySelector('input'),
};

refs.inputDataTime.addEventListener('input', () => {
  console.log('click');
});

console.log(refs.inputDataTime);
