const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const correctLine = event.currentTarget.value.trim();
  span.textContent = correctLine;
  if (correctLine === "") {
    span.textContent = "Anonymous";
  }
});
