const form = document.querySelector(".login-form");
const elements = form.elements;
const inputEmail = document.querySelector("input[name='email']");
const inputPassword = document.querySelector("input[name='password']");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const { email, password } = elements;
    const formData = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(formData);
    form.reset();
  }
});
