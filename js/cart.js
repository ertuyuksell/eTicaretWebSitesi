let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  let results = "";
  cart.forEach((item) => {
    results += `<tr class="cart-item">
                    <td></td>
                    <td class="cart-image">
                      <img src=${item.img.singleImage} alt="" />
                      <i class="bi bi-x delete-cart" data-id=${item.id}></i>
                    </td>
                    <td>${item.name}</td>
                    <td>$${item.price.newPrice.toFixed(2)}</td>
                    <td class="product-quantity">${item.quantity}</td>
                    <td class="product-subtotal">$${(
                      item.price.newPrice * item.quantity
                    ).toFixed(2)}</td>
                </tr>`;
  });
  cartWrapper.innerHTML = results;
  removeCartİtem();
  // console.log(results);
}
displayCartProduct();

function removeCartİtem() {
  let cartItems = document.querySelector(".header-right-links-bag-count");
  const btnDeleteCart = document.querySelectorAll(".delete-cart");
  btnDeleteCart.forEach((button) => {
    button.addEventListener("click", function (e) {
      const id = button.dataset.id;
      cart = cart.filter((item) => item.id !== Number(id));
      displayCartProduct(); // silmeden sonra ürünleri yenieleme
      localStorage.setItem("cart", JSON.stringify(cart)); //Karttaki (applicitoin)ürün sayısı yenileme
      cartItems.innerHTML = cart.length;
      saveCartValues();
    });
  });
}

function saveCartValues() {
  const cartTotal = document.getElementById("cart-total");
  const cartSubtotal = document.getElementById("subtotal");
  const fastCargo = document.getElementById("fast-cargo");
  const fastCargoPrice = 15;
  let itemsTotal = 0;

  cart.length > 0 &&
    cart.map((item) => (itemsTotal += item.price.newPrice * item.quantity));

  cartSubtotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
  cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;

  fastCargo.addEventListener("change", function (e) {
    if (e.target.checked) {
      cartTotal.innerHTML = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`;
    } else {
      cartTotal.innerHTML = `$${itemsTotal.toFixed(2)}`;
    }
  });
}
saveCartValues();
