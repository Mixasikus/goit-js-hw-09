const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
});
const createPromise = () => {
  return new Promise((position, delay) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      position('привет');
    }
    delay('пока');
  });
};

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
