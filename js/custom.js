M.AutoInit();
// Initialize the carousel
document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
  });
});

//Slider code
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems, {
    indicators: true,
    height: 800,
    transition: 500,
    interval: 4000,
  });
});
