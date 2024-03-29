import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
const input = document.querySelector('#datetime-picker');
const timeNow = new Date();
let selectedDate = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= timeNow) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      return;
    }

    startButton.disabled = false;
    selectedDate = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);
startButton.addEventListener('click', startTimer);

function updateTimer(endDate) {
  const timeCurrent = new Date();
  const timeDifference = endDate - timeCurrent;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
    startButton.disabled = false;
    input.disabled = false;

    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeDifference);

  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
let timerInterval;
function startTimer() {
  if (selectedDate) {
    timerInterval = setInterval(() => updateTimer(selectedDate), 1000);

    startButton.disabled = true;
    input.disabled = true;
  }
}
