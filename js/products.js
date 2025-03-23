import { product1 } from "./glide.js";

// // let products = localStorage.getItem("products")
// //   ? JSON.parse(localStorage.getItem("products"))
// //   : [];

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function addToCart(products) {
  const cartItems = document.querySelector(".header-right-links-bag-count");
  const buttons = [...document.getElementsByClassName("add-to-cart")];
  buttons.forEach((button) => {
    const inCart = cart.find((item) => item.id === Number(button.dataset.id));
    if (inCart) {
      button.setAttribute("disabled", "disabled");
    } else {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const id = button.dataset.id; //e.target.dataset.id button.dataset.id
        const findProducts = products.find(
          (products) => products.id === Number(id)
        );
        cart.push({ ...findProducts, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        button.setAttribute("disabled", "disabled");
        cartItems.innerHTML = cart.length;
      });
    }
  });
}

function productRoute() {
  const productsLink = document.getElementsByClassName("products-link");
  Array.from(productsLink).forEach((button) => {
    button.addEventListener("click", function () {
      // e.preventDefault();
      const id = button.dataset.id;
      localStorage.setItem("productID", JSON.stringify(id));
      window.location.href = "single-product.html"; //eye tıklandığında ürün içeriğine gitme
    });
  });
}

function productsFunc(products) {
  const productsContainer = document.getElementById("products-list");

  let results = "";
  products.forEach((item) => {
    results += `
    <li class="products-item glide__slide">
                <div class="products-img">
                  <a href="#">
                    <img
                      src=${item.img.singleImage}
                      alt=""
                      class="imgfront"
                    />
                    <img
                      src=${item.img.thumbs[1]}
                      alt=""
                      class="imgback"
                    />
                  </a>
                </div>
                <div class="products-info">
                  <a href="#" class="products-title">${item.name}</a>
                  <ul class="products-star">
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i class="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <div class="products-prices">
                    <strong>$${item.price.newPrice.toFixed(2)}</strong>
                    <span>$${item.price.oldPrice.toFixed(2)}</span>
                  </div>
                  <span class="products-discount">-${item.discount}%</span>
                  <div class="products-links">
                    <button class="add-to-cart" data-id="${item.id}">
                      <i class="bi bi-bag-fill"></i>
                    </button>
                    <button>
                      <i class="bi bi-heart-fill"></i>
                    </button>
                    <a href="#" class="products-link" data-id=${item.id}>
                      <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-share-fill"></i>
                    </a>
                  </div>
                </div>
              </li>
    `;
    productsContainer ? (productsContainer.innerHTML = results) : "";
    addToCart(products);
  });

  product1();
  productRoute();
}

export default productsFunc;
