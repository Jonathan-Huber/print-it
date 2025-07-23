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
]

//=========//
// Étape 2 //
//=========//

// Récupère l'element avec la classe ".arrow_left" pour le stocker dans la constante arrowLeft
const arrowLeft = document.querySelector(".arrow_left")

// Idem avec arrow_right
const arrowRight = document.querySelector(".arrow_right")

// Sur arrowLeft, écoute l'événement "click" et affiche un message dans la console quand on clique.
	arrowLeft.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche de gauche");
	});

// Idem pour arrowRight
	arrowRight.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche de droite");
	});

//=========//
// Étape 3 //
//=========//

// Je récupère le nombre total d'images dans la collection slides
const nombreImg = slides.length

// Je récupère la <div> qui contiendra les points de navigation (dots)
let dots = document.querySelector(".dots");

// Je crée une chaîne de caractères vide qui contiendra le HTML des dots
let dotsParNombreImg = "";
// Pour chaque image, je génère une <div> dot
for(let index = 0; index < nombreImg; index++) {
	// Pour la première image (0), j'ajoute la classe "dot_selected" pour indiquer le dot actif
	if (index === 0) {
		dotsParNombreImg += `<div class="dot dot_selected"></div>`;
	} else {
		// Pour les autres images, dot sans la classe "dot_selected"
		dotsParNombreImg += `<div class="dot"></div>`;
	}
}
// J'injecte le HTML dans la div contenant les dots
dots.innerHTML = dotsParNombreImg

//=========//
// Étape 4 //
//=========//

// Je récupère l'element avec la classe ".banner-img" pour le stocker dans la constante imageBanner
const imageBanner = document.querySelector(".banner-img");
// Je récupère l'element <p> enfant de l'ID #banner pour le stocker dans la constante texteImage
const texteImage = document.querySelector("#banner p");

// Je récupère les elements avec la classe ".dot" pour le stocker dans la constante allDots
const allDots = document.querySelectorAll(".dot");

// Je crée un variable que j'initialise à 0, représentant l'index de la slide actuelle
let slideIndex = 0;

// A chaque clic sur la flèche de droite...
arrowRight.addEventListener("click", () => {
	// J’enlève la classe "dot_selected" sur la dot actuellement active
	allDots[slideIndex].classList.remove("dot_selected");
	// j’incrémente l'index de la slide pour passer à la suivante
	slideIndex++;
	// J’ajoute la classe "dot_selected" sur la dot active
	allDots[slideIndex].classList.add("dot_selected");
	// Je modifie le src en récupérant la propriété "image" du tableau slides à l’index actuel
	imageBanner.src =`./assets/images/slideshow/${slides[slideIndex].image}`;
	// Je mets à jour le contenu du <p> avec la propriété "tagLine" correspondante dans slides
	texteImage.innerHTML = slides[slideIndex].tagLine;
});

// A chaque clic sur la flèche de gauche...
arrowLeft.addEventListener("click", () => {
	// J’enlève la classe "dot_selected" sur la dot actuellement active
	allDots[slideIndex].classList.remove("dot_selected");
	// je décrémente l'index de ma slide pour passer à la précédente
	slideIndex--;
	// J’ajoute la classe "dot_selected" sur la dot active
	allDots[slideIndex].classList.add("dot_selected");
	// Je modifie le src en récupérant la propriété "image" du tableau slides à l’index actuel
	imageBanner.src =`./assets/images/slideshow/${slides[slideIndex].image}`;
	// Je mets à jour le contenu du <p> avec la propriété "tagLine" correspondante dans slides
	texteImage.innerHTML = slides[slideIndex].tagLine;
});