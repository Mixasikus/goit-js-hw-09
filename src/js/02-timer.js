import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDataTime: document.querySelector('input[datetime-picker]'),
};

flatpickr(refs.inputDataTime, {});
