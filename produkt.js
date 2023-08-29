const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// fetch
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;
  document.querySelector(".gender").textContent = product.gender;
  document.querySelector(".season").textContent = product.season;
  document.querySelector(".price").textContent = product.price;
}
