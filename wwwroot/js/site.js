// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
const slideWidth = slider.clientWidth;

prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
        slideIndex = slides.children.length - 1;
    } else {
        slideIndex--;
    }
    slide();
});

nextBtn.addEventListener("click", () => {
    if (slideIndex === slides.children.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    slide();
});

function slide() {
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)