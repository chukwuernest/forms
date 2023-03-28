import get from './element.js';
const Form = document.querySelector('.forms');
const first = document.getElementById('firstName');
const last = document.getElementById('lastName');
const mail = document.getElementById('Email');
const password = document.getElementById('password');
const word = document.querySelector('.forms-1 input');

Form.addEventListener('submit', (e) => {
  e.preventDefault();

  const first = Form['firstName'].value;
  const last = Form['lastName'].value;
  const mail = Form['Email'].value;
  const password = Form['password'].value;
  // alert(first + last + mail + password);

  // alert(first + last + mail + Password);
  // This if and else take from the Functions of addErrorTo and removeErrorfrom.
  if (first === '') {
    addErrorTo('first', 'First Name is required');
  } else {
    removeErrorFrom('first', 'good');
  }
  if (last === '') {
    addErrorTo('last', 'last Name is required');
  } else {
    removeErrorFrom('last', 'good');
  }

  if (mail === '') {
    addErrorTo('mail', 'Email is required');
  } else {
    removeErrorFrom('mail', 'good');
  }

  if (password === '') {
    addErrorTo('password', 'password is required');
  } else {
    removeErrorFrom('password', 'good');
  }
});

function validation(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
}
// This function helps to pick the field and addErrorTo the outcome.
function addErrorTo(field, message) {
  if (field === 'first') {
    const small = document.getElementById('Firstsmall');
    small.innerText = message;
  }

  if (field === 'last') {
    const small = document.getElementById('lastsmall');
    small.innerText = message;
  }
  if (field === 'mail') {
    const small = document.getElementById('Emailsmall');
    small.innerText = message;
  }
  if (field === 'password') {
    const small = document.getElementById('passwordsmall');
    small.innerText = message;
  }
}

// This function helps to pick the field and removeErrorTo the outcome.
function removeErrorFrom(field, message) {
  if (field === 'first') {
    const small = document.getElementById('Firstsmall');
    small.innerText = message;
  }

  if (field === 'last') {
    const small = document.getElementById('lastsmall');
    small.innerText = message;
  }
  if (field === 'mail') {
    const small = document.getElementById('Emailsmall');
    small.innerText = message;
  }
  if (field === 'password') {
    const small = document.getElementById('passwordsmall');
    small.innerText = message;
  }
}
