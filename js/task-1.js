const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
  const categoriesTitle = item.querySelector("h2").textContent;
  const categoryItemCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesTitle}`);
  console.log(`Elements: ${categoryItemCount}`);
});
