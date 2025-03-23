export function zoomFunc() {
  const singleİmage = document.querySelector("#single-image");
  const singleİmageWrapper = document.querySelector(".single-image-wrapper");

  singleİmageWrapper.addEventListener("mousemove", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    singleİmage.style.transform = "scale(5)";
    singleİmage.style.transformOrigin = `${x}px ${y}px`;
    // singleİmage.style.overflow = "hidden";
  });

  singleİmageWrapper.addEventListener("mouseleave", function (e) {
    singleİmage.style.transform = "scale(1)";
    singleİmage.style.transformOrigin = "center";
  });
}

export default zoomFunc();
