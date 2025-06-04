document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  function showError(element, message) {
    element.textContent = message;
    element.style.display = "block";
    element.previousElementSibling.classList.add("invalid"); // Add 'invalid' class to the input
  }

  function hideError(element) {
    element.textContent = "";
    element.style.display = "none";
    element.previousElementSibling.classList.remove("invalid"); // Remove 'invalid' class from the input
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError(nameError, "Name is required.");
      isValid = false;
    } else {
      hideError(nameError);
    }

    if (emailInput.value.trim() === "") {
      showError(emailError, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailError, "Please enter a valid email address.");
      isValid = false;
    } else {
      hideError(emailError);
    }

    if (messageInput.value.trim() === "") {
      showError(messageError, "Message is required.");
      isValid = false;
    } else {
      hideError(messageError);
    }

    if (isValid) {
      successMessage.textContent =
        "Form submitted successfully! We will get back to you soon.";
      successMessage.style.display = "block";
      contactForm.reset(); // Clear the form fields

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    } else {
      successMessage.style.display = "none";
    }
  });

  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() !== "") {
      hideError(nameError);
    }
  });

  emailInput.addEventListener("input", () => {
    if (
      emailInput.value.trim() !== "" &&
      isValidEmail(emailInput.value.trim())
    ) {
      hideError(emailError);
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.trim() !== "") {
      hideError(messageError);
    }
  });
});
