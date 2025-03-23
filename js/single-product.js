import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./single-product-glide.js";
import zoomFunc from "./single-product/zoom.js";
import colorsFunc from "./single-product/colors.js";
import valuesFuncFunc from "./single-product/values.js";
import tabsFunc from "./single-product/tabs.js";
import commentsFunc from "./single-product/comments.js";

const productID = localStorage.getItem("productID")
  ? JSON.parse(localStorage.getItem("productID"))
  : localStorage.setItemItem("productID", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItemItem("products", JSON.stringify([]));

const findProducts = products.find((item) => item.id === Number(productID));

//! product title
const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProducts.name;

//! product price
const productNewPrice = document.querySelector(".new-price");
const productOldPrice = document.querySelector(".old-price");
productNewPrice.innerHTML = ` $${findProducts.price.newPrice.toFixed(2)}`;
productOldPrice.innerHTML = ` $${findProducts.price.oldPrice.toFixed(2)}`;

//!product gallery
const productSingleImage = document.querySelector("#single-image");
productSingleImage.src = findProducts.img.singleImage; //image src olur innerHTML yerine

const galleryThumbs = document.querySelector(".gallery-thumbs");
let result = "";
findProducts.img.thumbs.forEach((item) => {
  result += `
  <li class="glide__slide">
    <img
      src=${item}
      alt=""
      class="img-fluid"
    />
   </li>
  `;
});

galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

const productThumbs = document.querySelectorAll(
  ".product-thumb .glide__slide img"
);
productThumbs[0].classList.add("active");

//! add to cart
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const findCart = cart.find((item) => item.id === findProducts.id);
const btnAddToCart = document.getElementById("add-to-cart");
const quantityDOM = document.getElementById("quantity");
let cartItems = document.querySelector(".header-right-links-bag-count");

if (findCart) {
  btnAddToCart.setAttribute("disabled", "disabled");
} else {
  btnAddToCart.addEventListener("click", function () {
    cart.push({ ...findProducts, quantity: Number(quantityDOM.value) });
    btnAddToCart.setAttribute("disabled", "disabled");
    localStorage.setItem("cart", JSON.stringify(cart));
    cartItems.innerHTML = cart.length;
  });
}
