const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const addressInput = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

function validateForm() {
  event.preventDefault();

  if (nameInput.value.trim().length > 0) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "revert";
  }

  if (subject.value.length >= 10) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "revert";
  }

  //EMAIL VALIDATION

  if (addressInput.value.length >= 25) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "revert";
  }
}

contactForm.addEventListener("submit", validateForm);

// /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
