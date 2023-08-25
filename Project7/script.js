const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const specialChar = document.getElementById("special_char");
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
    document.getElementById("email_error").classList.remove("hide");
    document.getElementById("email_error").classList.add("show");
  }
  if (emailRegex.test(userEmail.value)) {
    userEmail.classList.toggle("correct");
    document.getElementById("email_error").classList.add("hide");
    document.getElementById("email_error").classList.remove("show");
  } else {
    userEmail.classList.toggle("error");
    document.getElementById("email_error").classList.remove("hide");
    document.getElementById("email_error").classList.add("show");
  }
}

const AllChecks = {
  lowercase: false,
  uppercase: false,
  hasNumber: false,
  hasSpecialChar: false,
  isLongEnough: false,
};

// Check if the password is strong enough
function ValidatePassword() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (userPassword.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    AllChecks.lowercase = true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    AllChecks.lowercase = false;
  }

  // Validate Special Characters letters
  let SpecialCharacters =
    /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;
  console.log(userPassword.value.match(SpecialCharacters));
  if (userPassword.value.match(SpecialCharacters)) {
    specialChar.classList.remove("invalid");
    specialChar.classList.add("valid");
    AllChecks.hasSpecialChar = true;
  } else {
    specialChar.classList.remove("valid");
    specialChar.classList.add("invalid");
    AllChecks.hasSpecialChar = false;
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (userPassword.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    AllChecks.uppercase = true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    AllChecks.uppercase = false;
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (userPassword.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    AllChecks.hasNumber = true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    AllChecks.hasNumber = false;
  }

  // Validate length
  if (userPassword.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    AllChecks.isLongEnough = true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    AllChecks.isLongEnough = false;
  }

  function checkAllValuesAreTrue(obj) {
    const checkedValues = [];
    const keyList = Object.keys(obj);
    for (let i = 0; i < keyList.length; i++) {
      let prop = Object.keys(obj)[i];
      checkedValues.push(obj[prop]);
    }
    let AllTrue = checkedValues.includes(false);

    if (AllTrue) {
      document
        .getElementById("password_error")
        .classList.remove("dont_display");
      document
        .getElementById("password_error")
        .classList.add("display_element");
    }
  }
  checkAllValuesAreTrue(AllChecks);
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
    new: ConfirmPassword.value,
  });

  if (
    ConfirmPassword.value == userPassword.value &&
    ConfirmPassword.value !== ""
  ) {
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
function handleSubmit() {
  ValidateName();
  ValidateEmail();
  ValidatePassword();
  ValidateConfirmPassword();
  let AllTrue;
  function checkAllValuesAreTrue(obj) {
    const checkedValues = [];
    const keyList = Object.keys(obj);
    for (let i = 0; i < keyList.length; i++) {
      let prop = Object.keys(obj)[i];
      checkedValues.push(obj[prop]);
    }
    AllTrue = checkedValues.includes(false);

    if (AllTrue) {
      document
        .getElementById("password_error")
        .classList.remove("dont_display");
      document
        .getElementById("password_error")
        .classList.add("display_element");
    }
  }
  checkAllValuesAreTrue(AllChecks);
  console.log(AllTrue);
  if (!AllTrue) {
    window.open(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "_blank"
    );
  }
}
