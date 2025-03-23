import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

//! add product to localStorage start
(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  searchFunc(data);
})();

//! add product to localStorage end

//! add cartItems to localStorage start
const cartItems = document.querySelector(".header-right-links-bag-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! add cartItems to localStorage end

//! modal-dialog start
const modalDialogDOM = document.querySelector(".modal-dialog");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");

btnCloseDialog.addEventListener("click", function () {
  modalDialogDOM.classList.remove("show");
});

document.addEventListener("click", function (e) {
  if (!e.composedPath().includes(modalContentDOM)) {
    modalDialogDOM.classList.remove("show");
  }
});

setTimeout(() => {
  modalDialogDOM.classList.add("show");
}, 3000);
//! modal-dialog end
