document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Get form fields
  const nameField = document.getElementById("name");
  const ageField = document.getElementById("age");
  const emailField = document.getElementById("email");
  const conditionField = document.getElementById("condition");
  const medicationField = document.getElementById("medication");
  const messageField = document.getElementById("message");

  // Error elements
  const nameError = nameField.nextElementSibling;
  const ageError = ageField.nextElementSibling;
  const emailError = emailField.nextElementSibling;

  // Name validation
  if (!/^[a-zA-Z\s]+$/.test(nameField.value.trim())) {
    nameError.textContent = "Name must contain only letters.";
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.style.display = "none";
  }

  // Age validation
  if (
    ageField.value.trim() === "" ||
    isNaN(ageField.value) ||
    parseInt(ageField.value) <= 0
  ) {
    ageError.textContent = "Please enter a valid age.";
    ageError.style.display = "block";
    valid = false;
  } else {
    ageError.style.display = "none";
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  // If all required fields are valid
  if (valid) {
    const formData = {
      name: nameField.value.trim(),
      age: ageField.value.trim(),
      email: emailField.value.trim(),
      existingConditions: conditionField.value.trim(),
      currentMedications: medicationField.value.trim(),
      feedbackMessage: messageField.value.trim(),
    };

    console.log("Submitted Survey Data:", formData);

    // ✅ Open thankyou.html in a popup window
    //window.open("thankyou.html", "ThankYouPopup", "width=600,height=400");
	window.location.replace("thankyou.html");
  }
});
