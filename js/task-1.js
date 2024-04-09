const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const categoriesTitle = item.querySelector("h2");
  const categoriesListEl = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesTitle.textContent}`);
  console.log(`Elements: ${categoriesListEl}`);
});
