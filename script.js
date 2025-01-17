const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let index = 0;

prevButton.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : 4;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  index = (index < 4) ? index + 1 : 0;
  updateCarousel();
});

function updateCarousel() {
  const width = carouselImages.clientWidth;
  carouselImages.style.transform = `translateX(${-index * width}px)`;
}

carouselImages.addEventListener('click', () => {
  const imgSrc = carouselImages.children[index].src;
  window.open(imgSrc, '_blank');
});