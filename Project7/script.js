const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const username = document.getElementById("name_input");
const userEmail = document.getElementById("email_input");
const userPassword = document.getElementById("password_input");
const ConfirmPassword = document.getElementById("confirm_password_input");

function ValidateName() {
  console.log(username.value.length);
  if (username.value === "") {
    username.classList.toggle("error");
    document.getElementById("name_error").classList.remove("hide");
    document.getElementById("name_error").classList.add("show");
  }
  if (username.value.length >= 3) {
    username.classList.toggle("correct");
    document.getElementById("name_error").classList.add("hide");
    document.getElementById("name_error").classList.remove("show");
  } else {
    username.classList.toggle("error");
    document.getElementById("name_error").classList.remove("hide");
    document.getElementById("name_error").classList.add("show");
  }
}

function ValidateEmail() {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userEmail.value === "") {
    username.classList.toggle("error");
  }
  if (emailRegex.test(userEmail.value)) {
    userEmail.classList.toggle("correct");
  } else {
    userEmail.classList.toggle("error");
  }
}

// Hide the password error messages when the window loads
window.onload = () => {
  userPassword.onfocus = () => {
    document.getElementById("password_error").classList.remove("dont_display");
    document.getElementById("password_error").classList.add("display_element");
  };
  userPassword.onblur = function () {
    document
      .getElementById("password_error")
      .classList.remove("display_element");
    document.getElementById("password_error").classList.add("dont_display");
  };
};

// Check if the password is strong enough
function ValidatePassword() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (userPassword.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (userPassword.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (userPassword.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (userPassword.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function ShowOrHidePassword() {
  if (userPassword.type === "password") {
    userPassword.type = "text";
  } else {
    userPassword.type = "password";
  }
}
function ShowOrHideConfirmPassword() {
  if (ConfirmPassword.type === "password") {
    ConfirmPassword.type = "text";
  } else {
    ConfirmPassword.type = "password";
  }
}

// Validate Confirm password
function ValidateConfirmPassword() {
  console.log({
    og: userPassword.value,
    new: userConfirmPassword.value,
  });

  if (userConfirmPassword.value == userPassword.value) {
    // Remove error styles and add correct styles
    ConfirmPassword.classList.remove("error");
    ConfirmPassword.classList.add("correct");

    document
      .getElementById("confirm_password_error")
      .classList.remove("display_element");
    document
      .getElementById("confirm_password_error")
      .classList.add("dont_display");
  } else {
    // Remove correct styles and add error  styles
    ConfirmPassword.classList.remove("correct");
    ConfirmPassword.classList.add("error");

    document
      .getElementById("confirm_password_error")
      .classList.remove("dont_display");
    document
      .getElementById("confirm_password_error")
      .classList.add("display_element");
  }
}
function handleSubmit(e) {
  e.preventDefault;
  ValidateName();
  ValidateEmail();
}
