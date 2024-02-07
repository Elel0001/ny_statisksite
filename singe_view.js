// ************ SINGLE PODUCT SITE *******************
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((response) => response.json())
  .then((data) => showClothes(data));

function showClothes(product) {
  const clothesClone = clothesTemplate.cloneNode(true).content;

  // console.log(product);
  document.querySelector(".purchaseBox h3").textcontent = product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textcontent = product.brandname;
  document.querySelector(".images_singleview").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    console.log("hej");
    clothesClone.querySelector(".image_singleview").classList.add("image_soldout");
    clothesClone.querySelector(".clothes_box").classList.add("clothes_soldout");
    clothesClone.querySelector(".clothes_box").textContent = "Sold Out";
  }
}
