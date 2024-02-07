// Burgermenu //
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");
const headline = document.querySelector("h1.underoverskrift");
const breadcrumbsLast = document.querySelector(".breadcrumbs_last");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
// burgermenu slut //

// ************ PRODUCTLIST SITE ***********
window.addEventListener("DOMContentLoaded", init);

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log("du valgte", category);

const clothesURL = "https://kea-alt-del.dk/t7/api/products?category=" + category;

let clothesTemplate;
let clothesContainer;

function init() {
  console.log("init");

  clothesTemplate = document.querySelector(".clothes_template");
  console.log("clothes_template", clothesTemplate);

  clothesContainer = document.querySelector(".clothes_container");
  console.log("clothes_container", clothesContainer);

  fetch(clothesURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showClothes(json);
    });
}

function showClothes(clothesJSON) {
  let clothesClone;

  clothesJSON.forEach((clothes) => {
    console.log("clothes", clothes);
    const clothesClone = clothesTemplate.cloneNode(true).content;
    clothesClone.querySelector(".clothes_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${clothes.id}.webp`;
    clothesClone.querySelector(".clothes_image").alt = `Picture of ${clothes.productdisplayname} item`;
    clothesClone.querySelector(".clothes_productdisplayname").textContent = clothes.productdisplayname;
    clothesClone.querySelector(".clothes_brandname").textContent = clothes.brandname;
    clothesClone.querySelector(".clothes_price").textContent = clothes.price;
    clothesClone.querySelector(".clothes_discount_data").textContent = clothes.discount;
    headline.textContent = clothes.category;
    breadcrumbsLast.textContent = clothes.category;

    if (clothes.discount !== null) {
      clothesClone.querySelector(".clothes_discount").classList.remove("hidden");
    }
    if (clothes.soldout) {
      clothesClone.querySelector(".clothes_image").classList.add("image_soldout");
      clothesClone.querySelector(".clothes_box").classList.add("clothes_soldout");
      clothesClone.querySelector(".clothes_box").textContent = "Sold Out";
    }

    clothesClone.querySelector(".read-more").setAttribute("href", `product.html?id=${clothes.id}`);

    clothesContainer.appendChild(clothesClone);
  });
}
