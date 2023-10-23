import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const message = document.querySelector('textarea');
const objInput = {
    // email: '',
    // message: ''
};

// initFort();

form.addEventListener('input', onFormInput);

function onFormInput(evt) {
   
    // if (evt.target === emailInput) {
    //     onEmailInput(evt);
    // } else if (evt.target === message) {
    //     onTextareaInput(evt);
    // }

    // function onEmailInput(evt) {
    // const emailValue = evt.target.value;
    // objInput.email = emailValue;
    // };

    // function onTextareaInput(evt) {
    // const messageValue = evt.target.value;
    // objInput.message = messageValue
    // };
    const formData = new FormData(form);
    formData.forEach((email, message) => console.log(email, message))
    
    // localStorage.setItem("feedback-form-state", JSON.stringify(objInput))
  };

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    objInput[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(objInput))
    // console.log(objInput);
}

// function initFort() {
//     let storedInformation = localStorage.getItem("feedback-form-state");
//     if (storedInformation) {
//         storedInformation = JSON.parse(storedInformation);
//         console.log(storedInformation);
//         Object.entries(storedInformation).forEach(([email, message]) => {
//             console.log(email, message);
//             form.elements[email].value = value;
//         })
//     }
// }
