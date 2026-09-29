"use strict";
const param = new URLSearchParams(window.location.search);
const selectedCategory = param.get("category");
console.log("selectedCategory", selectedCategory);

const productURL = `https://kea-alt-del.dk/t7/api/products?category=${selectedCategory}`;
const listContainer = document.querySelector(".product_list_container");

function getData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showProducts(data);
    });
  });
}

function showProducts(products) {
  console.log("First product", products[0]);
  console.log("Number of products", products.length);

  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `<article class="product ${product.soldout ? "soldout" : ""}">
         <a class="productpic" href="product.html?id=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product"></a>
          <h3>${product.productdisplayname}</h3>
          <p class="brand">${product.brandname} - ${product.category}</p>
          <div>
          ${product.discount ? "<p class='discount_tag'>" + getDiscountPrice(product.price, product.discount) + "</p>" : ""}
            <p>${product.price} kr    ${product.discount ? " -" + product.discount + "%" : ""}</p>
          </div>
          <p><a href="product.html?id=${product.id}">Read More</a></p>
          ${product.soldout ? "<p class='soldout_tag'>Sold Out</p>" : ""}
        </article>`;
  });

  //   data.forEach((products) => {
  //     myInnerHtml += `
  //      <article class="product">
  //     <a class="productpic" href="product.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp" alt="product"></a>
  //                     <h3>${products.productdisplayname}</h3>
  //                     <p class="brand">${products.articletype} | ${products.brandname}</p>
  //                     <div>
  //                         <p>DKK ${products.price},-</p>
  //                     </div>
  //                     <p><a class="readmore" href="#">Read More</a></p>
  //                     <p class="soldout_tag">Sold Out</p>
  //                     </article>
  // `;
  //   });

  // productList.innerHTML = myInnerHtml;
}

getData(productURL);

function getDiscountPrice(originalPrice, discount) {
  return Math.round((originalPrice * (100 - discount)) / 100);
}
