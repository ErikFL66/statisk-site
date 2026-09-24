"use strict";
console.log("hello world");
const productUrl = "https://kea-alt-del.dk/t7/api/categories";
const cardGrid = document.querySelector(".card-grid");
getData();

function getData() {
  fetch(productUrl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  cardGrid.innerHTML = "";
  let myInnerHtml = "";

  data.forEach((categories) => {
    myInnerHtml += `   
    <a href="productlist.html" class="indexcard">
${categories.category}</a>
`;
  });

  cardGrid.innerHTML = myInnerHtml;
}
