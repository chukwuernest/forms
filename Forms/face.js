import get from "./element.js";
const form = document.querySelector(".forms");
const first = document.getElementById("firstName");
const last = document.getElementById("lastName");
const mail = document.getElementById("Email");
const Password = document.getElementById("Password");
const word = document.querySelector(".forms-1 input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const first = form["firstName"].value;
  const last = form["lastName"].value;
  const mail = Email.value.trim();
  const Password = form["Password"].value;
  // alert(first + last + mail + Password);

  if (first === "") {
    addErrorTo("first", "First Name is required");
  }

  if (last === "") {
    addErrorTo("lastName", "password Name is required");
  }
  if (Password === "") {
    addErrorTo("password", "password Name is required");
  }
});

function validation(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
}

function addErrorTo(field, message) {
  const small = form[field].parentNode("small");
  small.innerText = message;
}

function removeErrorFrom(field, message) {
  const small = document.getElementById("small");
  small.innerText = message;
}
