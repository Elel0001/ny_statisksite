// ************ SINGLE PODUCT SITE *******************
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((response) => response.json())
  .then((data) => showClothes(data));

function showClothes(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textcontent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textcontent = product.brandname;
  document.querySelector(".images_singleview").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
