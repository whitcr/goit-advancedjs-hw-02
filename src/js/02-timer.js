import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
const timeNow = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] <= timeNow) {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      return;
    }

    startButton.disabled = false;
  },
};

flatpickr('#datetime-picker', options);
startButton.addEventListener('click', startTimer);

function updateTimer(endDate) {
  const timeCurrent = new Date();
  const timeDifference = endDate - timeCurrent;

  if (timeDifference <= 0) {
    clearInterval(timerInterval);
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
  const selectedDate = flatpickr('#datetime-picker').selectedDates[0];
  if (selectedDate) {
    timerInterval = setInterval(() => updateTimer(selectedDate), 1000);

    startButton.disabled = true;
  }
}
