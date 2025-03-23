function sidebarFunc() {
  //! home sidebar start
  const btnOpenSidebar = document.querySelector("#btn-menu");
  const sidebar = document.querySelector("#sidebar");
  const btnCloseSidebar = document.querySelector("#close-sidebar");

  btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0";
  });

  btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
  });

  // click outside start
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });
  // click outside end
  //! home sidebar end
}
function modalSearchFunc() {
  //! modal search start
  const btnOpenSearch = document.querySelector(".header-right-links-search");
  const modalSearch = document.getElementsByClassName("modal-search");
  const btnSearch = document.querySelector("#btnSearch");
  const btnModalSearch = document.querySelector("#btnModalSearch");
  const modalWrapper = document.getElementsByClassName("modal-wrapper");

  btnOpenSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
    btnSearch.style.color = "#fed700";
  });

  // click exit start
  btnModalSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
    btnSearch.style.color = "#000";
  });
  // click exit end

  // click outside start
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(modalWrapper[0]) &&
      !event.composedPath().includes(btnSearch)
    ) {
      modalSearch[0].style.visibility = "hidden";
      modalSearch[0].style.opacity = "0";
      btnSearch.style.color = "#000";
    }
  });
  // click outside end
  //! modal search end
}

function headerFunc() {
  sidebarFunc();
  modalSearchFunc();
}

export default headerFunc();
