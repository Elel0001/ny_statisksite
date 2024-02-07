fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  console.log(cat.category);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = cat.category;
  copy.querySelector("a").href = "productlist.html?category=" + cat.category;
  document.querySelector(".grid_3-3").appendChild(copy);
}

// HJÆLP: https://www.youtube.com/watch?v=h5X-JvIjRv4&list=PLCx1FpZ4Dtb0XmfW8DkCJZ75ICLWtNaHF&index=28
