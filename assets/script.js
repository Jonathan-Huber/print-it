// Constantes et sélections DOM
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const imageBanner = document.querySelector(".banner-img");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const slidesText = document.querySelector("#banner p");
const slidesNumber = slides.length;

// Variable d’index
let slideIndex = 0;

// Création des dots
let dotsHTML = "";
for(let index = 0; index < slidesNumber; index++) {
	if (index === 0) {
		dotsHTML += `<div class="dot dot_selected"></div>`;
	} else {
		dotsHTML += `<div class="dot"></div>`;
	}
}
dots.innerHTML = dotsHTML;

const allDots = document.querySelectorAll(".dot");

// Mise à jour de la slide affichée
function updateSlide() {
	allDots.forEach(dot => {
		dot.classList.remove("dot_selected");
	})
  	allDots[slideIndex].classList.add("dot_selected");
	imageBanner.src =`./assets/images/slideshow/${slides[slideIndex].image}`;
	slidesText.innerHTML = slides[slideIndex].tagLine;
}

// Gestion des clics sur les flèches
arrowRight.addEventListener("click", () => {
	if (slideIndex === slidesNumber - 1) {
		slideIndex = 0;
	} else {
		slideIndex++;
	}
	updateSlide();
});


arrowLeft.addEventListener("click", () => {
	if (slideIndex === 0) {
		slideIndex = slidesNumber - 1;
	} else {
		slideIndex--;
	}
	updateSlide();
});