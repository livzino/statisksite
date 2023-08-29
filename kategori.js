const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);
  //console.log(product);
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = category.category;
  copy.querySelector("a").setAttribute("href", `produktliste.html?liv=${category.category}`);

  document.querySelector(".kategorigrid").appendChild(copy);
}
