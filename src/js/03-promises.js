const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
});
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }
  reject(`❌ Rejected promise ${position} in ${delay}ms`);
}
// console.log(createPromise());
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
