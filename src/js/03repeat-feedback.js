import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input');
const textarea = document.querySelector('textarea');

const common = {
  KEY_EMAIL: 'email',
  KEY_MESSAGE: 'message',
};

let email;
let message;

const inputThrottledFunction = throttle(onEmailInput, 5000);
const TextThrottledFunction = throttle(onTextareaInput, 5000);

userEmail.addEventListener('input', inputThrottledFunction);
textarea.addEventListener('input', TextThrottledFunction);

function onEmailInput(evt) {
  email = evt.target.value;
  localStorage.setItem(common.KEY_EMAIL, JSON.stringify(email));
}

function onTextareaInput(evt) {
  message = evt.target.value;
  localStorage.setItem(common.KEY_MESSAGE, JSON.stringify(message));
}

const emailInformation =  JSON.parse(localStorage.getItem(common.KEY_EMAIL)) ?? [];
if (emailInformation) {
  userEmail.value = emailInformation;
}

const messageInformation =  JSON.parse(localStorage.getItem(common.KEY_MESSAGE)) ?? [];
if (messageInformation) {
  textarea.value = messageInformation;
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(`email: ${userEmail.value}`);
  console.log(`message : ${textarea.value }`);
  userEmail.value = '';
  textarea.value = '';
}
