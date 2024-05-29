const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const firstNameErrorText = document.getElementById("firstname-error-text");
const passwordErrorText = document.getElementById("password-error-text");
const lastNameErrorText = document.getElementById("lastname-error-text");
const emailErrorText = document.getElementById("email-error-text");
const showPassword = document.getElementById("show-password");
const hidePassword = document.getElementById("hidepassword");

// console.log(form);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  /// console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName.match(/^\s*$/)) {
    firstName.classList.add("error");
    firstNameErrorText.style.visibility = "visible";
  } else {
    firstName.classList.remove("error");
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    lastNameErrorText.style.visibility = "visible";
  } else {
    lastName.classList.remove("error");
    lastNameErrorText.style.visibility = "hidden";
  }

  // Check email
  if (emailVal === "") {
    email.classList.add("error");
    emailErrorText.style.visibility = "visible";
    emailErrorText.textContent = "please enter your email";
  } else if (!validateEmail(emailVal)) {
    email.classList.add("error");
    emailErrorText.style.visibility = "visible";

    emailErrorText.textContent = "looks like this is not a valid email";
  } else {
    email.classList.remove("error");
    emailErrorText.style.visibility = "hidden";
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    passwordErrorText.style.visibility = "visible";
    showPassword.style.visibility = "hidden";
    hidePassword.style.visibility = "hidden";
  } else {
    password.classList.remove("error");
    passwordErrorText.style.visibility = "hidden";
  }
});

//hide and reveals password
function revealPassword() {
  if (password.type === "password") {
    password.type = "text";
    showPassword.style.visibility = "hidden";
    hidePassword.style.visibility = "visible";
  } else {
    password.type = "password";
    showPassword.style.visibility = "visible";
    hidePassword.style.visibility = "hidden";
  }
}

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
