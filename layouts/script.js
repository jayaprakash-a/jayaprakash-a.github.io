const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let index = 0;

function showNextImage() {
    index = (index + 1) % images.length;
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextImage, 2000); // Change image every 2 seconds
