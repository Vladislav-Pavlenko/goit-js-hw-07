const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("change", (event) => {
  span.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === "") {
    span.textContent = "Anonymous";
  }
});
