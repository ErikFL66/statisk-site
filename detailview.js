const param = new URLSearchParams(window.location.search);
const selectedId = param.get("id");
console.log("selectedId", selectedId);

const detailURL = `https://kea-alt-del.dk/t7/api/products/${selectedId}`;
const productContainer = document.querySelector(".fivegrid");
console.log("detailURL", detailURL);

function loadData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showDetails(data);
    });
  });
}

function showDetails(detail) {
  console.log("detail", detail);

  document.querySelector(".productimg").src = `https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp`;
  document.querySelector(".model").innerHTML = detail.productdisplayname;
  document.querySelector(".modelbuy").innerHTML = detail.productdisplayname;
  document.querySelector(".type").innerHTML = detail.articletype;
  document.querySelector(".id").innerHTML = detail.id;
  document.querySelector(".brandname").innerHTML = detail.brandname;
  document.querySelector(".brandwhite").innerHTML = detail.brandname + " | " + detail.articletype;
}

// function showDetails(detail) {
//   console.log("detail", detail);

//   productContainer.innerHTML = "";

//   detail.forEach((detail) => {
//     productContainer.innerHTML += `<div class="productpagepic"><img src="https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp" alt="product"></div>
//                 <div class="textthing">
//                     <div class="info">
//                         <div class="storinfoboks">
//                             <h1>Product information</h1>
//                             <p class="undertitel">Model Name</p>
//                             <p class="indryk">Total mega sej blå t-shirt</p>
//                             <p class="undertitel">Color</p>
//                             <p class="indryk">Den er stadig blå</p>
//                             <p class="undertitel">Inventory number</p>
//                             <p class="indryk">01189998819991197253</p>
//                         </div>
//                         <div>
//                             <h2 class="nike">Nike</h2>
//                             <p>Nike, creating experiences for today's athelete</p>
//                         </div>
//                     </div>
//                     <div class="buycard">
//                         <div>
//                             <h2 class="buytitle">Total mega sej blå t-shirt</h2>
//                             <p class="brandwhite">Nike | Tshirts</p>
//                         </div>
//                         <div>
//                             <form class="forms">
//                                 <label for="size">Choose a size:</label>
//                                 <select name="size" id="size">
//                                     <optgroup label="Size">
//                                         <option value="S">S</option>
//                                         <option value="M">M</option>
//                                         <option value="L">L</option>
//                                         <option value="XL">XL</option>
//                                         <option value="XXL">XXL</option>
//                                     </optgroup>

//                                 </select>

//                             </form>
//                             <button class="buttonbasket">add to basket</button>
//                         </div>
//                     </div>
//                 </div>`;
//   });

//   //   document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${detail.id}.webp`;
//   //   document.querySelector(".classher").innerHTML = detail.productdisplayname;
// }

loadData(detailURL);
