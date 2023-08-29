const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("liv");

fetch("https://kea-alt-del.dk/t7/api/products?limit=50&start=10&category=" + id)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  const template = document.querySelector("#smallproducttemplate").content;

  const copy = template.cloneNode(true);
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("p.subtle").textContent = product.articletype;
  copy.querySelector("p.price").textContent = product.price;

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article.smallproduct").classList.add("onSale");
    copy.querySelector("p.discounted").textContent = product.discount + "%";
  }
  document.querySelector(".produktgrid").appendChild(copy);
}

/*
id: 1163, 
gender: "Men", 
category: "Apparel", 
subcategory: "Topwear", 
articletype: "Tshirts", 
season: "Summer", 
productionyear: 2011, 
usagetype: "Sports", 
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey", 
price: 895, … 

    <article class="smallproduct">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp" alt="bukser">
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                <p class="subtle">Tshirts | Nike</p>
                <p class="price"><span>Prev.</span> DKK 1595,-</p>
                <div class="discounted">
                    <p>Now: 1000</p>
                    <p>-35%</p>
                </div>
                <a href="produkt.html">READ MORE</a>
            </article>
            */
