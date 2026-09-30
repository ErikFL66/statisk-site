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

loadData(detailURL);
