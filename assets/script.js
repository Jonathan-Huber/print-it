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

// 	Idem avec arrow_right
const arrowRight = document.querySelector(".arrow_right")

// Sur arrowLeft, écoute l'événement "click" et affiche un message dans la console quand on clique.
	arrowLeft.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche de gauche");
	});

//  Idem pour arrowRight
	arrowRight.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche de droite");
	});