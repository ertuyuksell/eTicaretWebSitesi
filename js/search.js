function productRoute() {
  const resultItemDOM = document.querySelectorAll(
    ".search-result .result-item"
  );
  resultItemDOM.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.dataset.id;
      if (id) {
        localStorage.setItem("productID", JSON.stringify(id));
        window.location.href = "single-product.html";
      }
      console.log(id);
    });
  });
}

function searchFunc(products) {
  const searchWrapperDOM = document.querySelector(".search-result .results");
  let result = "";
  products.forEach((item) => {
    result += `
            <a href="#" class="result-item" data-id=${item.id}>
              <img
                src=${item.img.singleImage}
                alt=""
                class="search-result-item-img"
              />
              <div class="search-result-item-info">
                <h4>${item.name}</h4>
                <div class="sku-span-div">
                  <span class="search-result-item-sku">
                    Stok Kodu: PD0016
                  </span>
                </div>
                <span class="search-result-item-price">$${item.price.newPrice.toFixed(
                  2
                )}</span>
              </div>
            </a>
    `;
  });
  searchWrapperDOM.innerHTML = result;
  productRoute();
  const searchInputDOM = document.querySelector(".modal-search-form input");
  let value = "";
  let filtered = [];
  searchInputDOM.addEventListener("input", (e) => {
    value = e.target.value;
    value = value.trim().toLowerCase(); //trim boşlukları almaz
    filtered = products.filter((item) =>
      item.name.trim().toLowerCase().includes(value)
    );
    let result = "";

    if (filtered.length === 0) {
      searchWrapperDOM.style.gridTemplateColumns = "1fr";
      searchWrapperDOM.innerHTML = `
      <a href="#" class="result-item" style="justify-content:center">
      😔 Aradığınız Ürün Bulunamadı 😔
      </a>`;

      //   searchWrapperDOM.style.textAlign = "center";
      productRoute();
    } else if (filtered.length < 2) {
      searchWrapperDOM.style.gridTemplateColumns = "1fr ";
      filtered.forEach((item) => {
        result += `
            <a href="#" class="result-item" data-id=${item.id}>
              <img
                src=${item.img.singleImage}
                alt=""
                class="search-result-item-img"
              />
              <div class="search-result-item-info">
                <h4>${item.name}</h4>
                <div class="sku-span-div">
                  <span class="search-result-item-sku">
                    Stok Kodu: PD0016
                  </span>
                </div>
                <span class="search-result-item-price">$${item.price.newPrice.toFixed(
                  2
                )}</span>
              </div>
            </a>
    `;
      });
      searchWrapperDOM.innerHTML = result;
      productRoute();
    } else {
      searchWrapperDOM.style.gridTemplateColumns = "1fr 1fr";
      filtered.forEach((item) => {
        result += `
                <a href="#" class="result-item" data-id=${item.id}>
                  <img
                    src=${item.img.singleImage}
                    alt=""
                    class="search-result-item-img"
                  />
                  <div class="search-result-item-info">
                    <h4>${item.name}</h4>
                    <div class="sku-span-div">
                      <span class="search-result-item-sku">
                        Stok Kodu: PD0016
                      </span>
                    </div>
                    <span class="search-result-item-price">$${item.price.newPrice.toFixed(
                      2
                    )}</span>
                  </div>
                </a>
        `;
      });
      searchWrapperDOM.innerHTML = result;
      productRoute();
    }
  });
}
export default searchFunc;
