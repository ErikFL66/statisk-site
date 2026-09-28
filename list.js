"use strict";
const productUrl = "https://kea-alt-del.dk/t7/api/products?limit=24";
const productList = document.querySelector(".product_list_container");
getData();

function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  productList.innerHTML = "";
  let myInnerHtml = "";

  data.forEach((products) => {
    myInnerHtml += ` 
     <article class="product">
    <a class="productpic" href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp" alt="product"></a>
                    <h3>${products.productdisplayname}</h3>
                    <p class="brand">${products.articletype} | ${products.brandname}</p>
                    <div>
                        <p>DKK ${products.price},-</p>
                    </div>
                    <p><a class="readmore" href="#">Read More</a></p>
                    <p class="soldout_tag">Sold Out</p>
                    </article>
`;
  });

  productList.innerHTML = myInnerHtml;
}
