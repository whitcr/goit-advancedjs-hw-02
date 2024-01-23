import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();

  const firstDelay = Number(form.elements['delay'].value);
  const step = Number(form.elements['step'].value);
  const amount = Number(form.elements['amount'].value);

  form.elements['delay'].value = '';
  form.elements['step'].value = '';
  form.elements['amount'].value = '';

  for (let i = 1; i <= amount; i++) {
    const currentDelay = firstDelay + (i - 1) * step;

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        iziToast.success({
          title: 'Fulfilled',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          title: 'Rejected',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
  }
}
