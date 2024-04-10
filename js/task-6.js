const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

buttonCreate.classList.add("create");
buttonDestroy.classList.add("destroy");

buttonCreate.addEventListener("click", (event) => {
  if (input.value < 1 || input.value > 100) {
    return;
  } else {
    createBoxes(input.value);
  }
});

const createBoxes = (amount) => {
  destroyBoxes();
  const array = [];
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    array.push(divEl);
  }
  boxesContainer.append(...array);
};
const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
  input.value = "";
};

buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
