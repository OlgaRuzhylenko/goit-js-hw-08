const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const message = document.querySelector('textarea');
const obj = {
    email: '',
    message: ''
};

form.addEventListener('input', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    if (evt.target === emailInput) {
        onEmailInput(evt);
    } else if (evt.target === message) {
        onTextareaInput(evt);
    }

function onEmailInput(evt) {
    const emailValue = evt.target.value;
    obj.email = emailValue;    
};

function onTextareaInput(evt) {
const messageValue = evt.target.value;
  obj.message = messageValue
    };
    
    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
  };

