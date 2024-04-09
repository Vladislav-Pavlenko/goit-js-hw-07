const form = document.querySelector(".login-form");
const elements = form.elements;
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === "") {
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
