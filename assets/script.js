// code fourni pour la constante slides + txt (tagline) - tableau

const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// code pour aller chercher les éléménts dans le document (banner, paragraphe, arrows et dots), document.querySelector
//avec current slide, ou slide en cours égal à 0

const bannerImg = document.querySelector('.banner-img');
console.log(bannerImg);
const tagline = document.querySelector('#banner p');
console.log(tagline);
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;

//Initialisation des dots

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);


    dot.addEventListener('click', () => {
        const slideToShow = i;
        updateSlide(slideToShow);
        updateDots();
    });
}
// fonction pour mettre à jour les slides, pris dans slides et partant de slide courant
function updateSlide(slideNumber) {
    bannerImg.src = `./assets/images/slideshow/${slides[slideNumber].image}`;
    tagline.innerHTML = slides[slideNumber].tagLine;
    currentSlide = slideNumber;
}

// fonction pour passer d'un slide à l'autre,slide courant + 1. 
//slide length renvoi au nombre d'objet dans le tableau cont slides : soit 4 objets
// le modulo % permet la boucle et a chaque fois, on change de slide et de dot

function nextSlide() {
    const slideToShow = (currentSlide + 1) % slides.length;
    updateSlide(slideToShow);
    updateDots();
}

function prevSlide() {
    const slideToShow = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(slideToShow);
    updateDots();
}

// ici, si on ne clique pas, un diaporama se met en marche avec 3 sec. d'intervalle
setInterval(nextSlide, 6000);
//updateSlide();
updateDots();


// fonction concernant les dots. On prend tous les éléments css dot et pour chacun, 
// on verifie si on est sur le slide courant ou pas pour lui appliquer une classe.


function updateDots() {
    const dots = document.querySelectorAll('.dot');
    console.log(dots);
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}


// les flèches; evenement ajoute sur arrow left ou right 


arrowLeft.addEventListener("click", () => {
    console.log("Clic sur la flèche gauche");
    prevSlide();
});

arrowRight.addEventListener('click', () => {
    console.log("Clic sur la flèche droite");
    nextSlide();
});

