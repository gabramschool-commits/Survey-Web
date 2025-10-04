document.getElementById("surveyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

  // Name validation
  const nameField = document.getElementById("name");
  const nameError = nameField.nextElementSibling;
  if (!/^[a-zA-Z\s]+$/.test(nameField.value.trim())) {
    nameError.textContent = "Name must contain only letters.";
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  // Age validation
  const ageField = document.getElementById("age");
  const ageError = ageField.nextElementSibling;
  if (ageField.value.trim() === "" || isNaN(ageField.value) || ageField.value <= 0) {
    ageError.textContent = "Please enter a valid age.";
    ageError.style.display = "block";
    valid = false;
  } else {
    ageError.style.display = "none";
  }

  // Email validation
  const emailField = document.getElementById("email");
  const emailError = emailField.nextElementSibling;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  if (valid) {
    window.location.href = "thankyou.html";
  }
});
