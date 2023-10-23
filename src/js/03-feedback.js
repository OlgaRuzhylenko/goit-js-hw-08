import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const message = document.querySelector('textarea');
let objInput = {
    email: '',
    message: ''
};

const throttledFunction = throttle(onFormInput, 500);

initFort();

form.addEventListener('input', throttledFunction);
function onFormInput(evt) {
    evt.preventDefault();

    if (evt.target === emailInput) {
        onEmailInput(evt);
    } else if (evt.target === message) {
        onTextareaInput(evt);
    }

    function onEmailInput(evt) {
    const emailValue = evt.target.value;
    objInput.email = emailValue;    
    };

    function onTextareaInput(evt) {
    const messageValue = evt.target.value;
    objInput.message = messageValue
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(objInput))
  };

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(objInput);

    localStorage.removeItem("feedback-form-state");

    emailInput.value = '';
    message.value = '';
    
    objInput.email = '';
    objInput.message = '';
}

function initFort() {
    let storedInformation = localStorage.getItem("feedback-form-state");
    if (storedInformation) {
        storedInformation = JSON.parse(storedInformation);
        console.log(storedInformation);
        Object.entries(storedInformation).forEach(([email, value]) => {
            console.log(email, message);
            form.elements[email].value = value;
        })
    }
}
 