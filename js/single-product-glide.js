export function singleThumbs() {
  const config3 = {
    perView: 5,
    breakpoints: {
      992: {
        perView: 3,
      },
    },
  };

  new Glide(".product-thumb", config3).mount();
}
