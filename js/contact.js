const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const addressInput = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

function validateForm() {
  event.preventDefault();
  let namePassed = false;
  let subjectPassed = false;
  let emailPassed = false;
  let adressPassed = false;

  if (checkLength(nameInput.value, 0) === true) {
    nameError.style.display = "none";
    namePassed = true;
  } else {
    nameError.style.display = "revert";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
    subjectPassed = true;
  } else {
    subjectError.style.display = "revert";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    emailPassed = true;
  } else {
    emailError.style.display = "revert";
  }

  if (checkLength(addressInput.value, 24) === true) {
    addressError.style.display = "none";
    adressPassed = true;
  } else {
    addressError.style.display = "revert";
  }

  if (namePassed && subjectPassed && emailPassed && adressPassed) {
    document.querySelector(".success").style.display = "revert";
  }
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /^([a-z0-9_\.\+-]+)@([\da-z-]+)(\.[a-z]{2,6})+$/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
