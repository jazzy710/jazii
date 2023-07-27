document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var navList = document.querySelector(".navlist");
    var burger = document.querySelector(".burger");

    burger.addEventListener("click", function () {
        navList.classList.toggle("open");

    });
});
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - index)}%)`;
    });
    currentIndex = index;
}
function prevSlide() {
    currentIndex = (currentIndex - 0 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}
function nextSlide() {
    currentIndex = (currentIndex + 0) % carouselItems.length;
    showSlide(currentIndex);
}
// Automatic slide transition after 3 seconds
function autoSlide() {
    nextSlide();
}
setInterval(autoSlide, 2000); // 3 seconds (3000 milliseconds)
showSlide(currentIndex);