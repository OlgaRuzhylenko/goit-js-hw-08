const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input');

const textarea = document.querySelector('textarea');
const common = {
  KEY_EMAIL: 'email',
  KEY_MESSAGE: 'message',
};

let email;
let message;

userEmail.addEventListener('input', onEmailInput);
textarea.addEventListener('input', onTextareaInput);

function onEmailInput(evt) {
  email = evt.target.value;
  localStorage.setItem(common.KEY_EMAIL, JSON.stringify(email));
}

function onTextareaInput(evt) {
  message = evt.target.value;
  localStorage.setItem(common.KEY_MESSAGE, JSON.stringify(message));
}

const emailInformation =
  JSON.parse(localStorage.getItem(common.KEY_EMAIL)) ?? [];

const messageInformation =
  JSON.parse(localStorage.getItem(common.KEY_MESSAGE)) ?? [];
