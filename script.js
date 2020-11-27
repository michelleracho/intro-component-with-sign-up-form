const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');

const form = document.querySelector('.signup-form');

// const inputs = document.querySelectorAll('input');
const inputs = document.querySelectorAll('.signup-form__input-container');
// const inputSpan = document.querySelectorAll('input-span');

// const error = document.querySelectorAll('error');
// const errorMsg = document.querySelectorAll('error-msg');
// const errorIcon = document.querySelectorAll('error-icon');

const validateEmail = email => {
  // abc@email.com
  const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  return pattern.test(email.toLowerCase());
};

const checkInput = () => {
  const isValidEmail = validateEmail(email.value);
  const emailError = document
    .querySelector('#email')
    .nextElementSibling.querySelector('.error__msg');

  for (let i = 0; i <= inputs.length - 1; i++) {
    let error = inputs[i].querySelector('.error');
    let inputValue = inputs[i].querySelector('.signup-form__input');
    let inputSpan = inputs[i].querySelector('.input-span');

    // check input value
    if (inputValue.value === '') {
      error.classList.add('show');
      inputValue.classList.add('error-input');
      inputSpan.innerText = inputValue.placeholder;
    }
    // remove error
    else {
      // validate email
      if (email.value !== '' && !isValidEmail) {
        // if (!isValidEmail) {
        inputValue.classList.add('error-input');
        inputValue.nextElementSibling.classList.add('show');
        // emailError.innerHTML = 'Looks like this is not an email';
        console.log(isValidEmail, email.value);
      }

      error.classList.remove('show');
      inputValue.classList.remove('error-input');
    }
  }
};

const submitForm = e => {
  e.preventDefault();
  checkInput();
  // form.reset();
};

submitBtn.addEventListener('click', submitForm);
