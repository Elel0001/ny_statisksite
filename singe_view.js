// ************ SINGLE PODUCT SITE *******************
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
const breadcrumbsLast = document.querySelector(".breadcrumbs_last");
const breadcrumbsProduct = document.querySelector(".breadcrumbs_product");

fetch(url)
  .then((response) => response.json())
  .then((data) => showClothes(data));

function showClothes(product) {
  console.log(product);

  document.querySelector(".purchaseBox h1").innerHTML = product.productdisplayname;
  document.querySelector(".styling_purchaceText .relid-number").innerHTML = product.relid;
  document.querySelector(".styling_purchaceText .color-item").innerHTML = product.basecolour;
  document.querySelector(".styling_purchaceText .article_type").innerHTML = product.articletype;
  document.querySelector(".clothes_price").innerHTML = product.price;
  document.querySelector(".purchaseBox .brand").innerHTML = product.brandname;
  document.querySelector(".images_singleview").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  breadcrumbsLast.textContent = product.category;
  breadcrumbsProduct.textContent = product.productdisplayname;

  if (product.soldout) {
    document.querySelector(".images_singleview").classList.add("image_soldout");
    document.querySelector(".clothes_box").classList.add("clothes_soldout_single");
    document.querySelector(".clothes_box").textContent = "Sold Out";
  }
}
