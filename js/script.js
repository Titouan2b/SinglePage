const buttonSlide = document.querySelector(".voirplus")
const slides = [
    {
        "image":"Ynak mosaique (1).jpg",
        "tagLine":"Cette image a été réalisé pour le projet de fin d'année de mon DUT MMI. Elle a été conçue pour être utilisée comme mosaïque sur le compte instagram de notre projet (@YnakProd)"
    },
    {
        "image":"Post-Kushy1.jpg",
        "tagLine":"Cette image a été réalisé pour le projet de fin d'année de mon DUT MMI. Elle a été conçue pour être utilisée comme cover de single pour notre projet musical."
    },
    {
        "image":"NFT-Diablo.jpg",
        "tagLine":"Cette image a été réalisé pour le projet de fin d'année de mon DUT MMI. Elle a été conçue pour être utilisée comme NTF pour faire grimper l'engouement autour de notre projet musical."
    },
    {
        "image":"Cover-DIABLO.jpg",
        "tagLine":"Cette image a été réalisé pour le projet de fin d'année de mon DUT MMI. Elle a été conçue pour être utilisée comme cover de single pour notre projet musical, c'est une photo réalisée en studio puis montée sur photoshop."
    },
    {
        "image":"Matthieu Rech Illustration.jpg",
        "tagLine":"Cette image a été réalisé en cours de \"Matte Painting\" durant ma licence pro métier du design. Il m'a été imposé de creer un univers graphique mettant en scène un produit et ce seulement en éffectuant un photomontage."
    },
    {
        "image":"Affiche-Alex-V13.jpg",
        "tagLine":"Cette image a été réalisé pour le projet de fin d'année de mon DUT MMI. Elle a été conçue pour être utilisée comme teaser pour alimenter les réseaux sociaux du groupe de projet."
    },
    {
        "image":"Capture1.PNG",
        "tagLine":"Cette image a été réalisé en cours de \"Matte Painting\" durant ma licence pro métier du design. Ici, nous devions, à l'aide d'un tablette graphique et du logiciel Photoshop, créer un dessin et le texturer."
    },
    {
        "image":"capture2.PNG",
        "tagLine":"Cette image a été réalisé en cours de \"Character Design\" durant ma licence pro métier du design. Ici, nous devions, à l'aide d'un tablette graphique et du logiciel Photoshop, créer un personnage de dessin animé adapté au enfants en suivant méthodiquement les étapes de vignettage et de colorisation."
    },
    {
        "image":"gtr.png",
        "tagLine":"J'ai réalisé cette image lorsque j'ai découvert \"Midjourney\", une intelligence artificielle qui vise à créer des images à partir d'un prompt que vous lui fournisez. Ici, j'ai adresser une requete pour avoir une image de nissan gtr sous la pluie. J'ai par la suite édité et créer des lumières et couleurs dans photoshop pour atteindre ce resultat."
    },
    {
        "image":"Matthieu Rech 2.jpg",
        "tagLine":""
    },
    {
        "image":"white tiger ai.png",
        "tagLine":"J'ai réalisé cette image lorsque j'ai découvert \"Midjourney\", une intelligence artificielle qui vise à créer des images à partir d'un prompt que vous lui fournisez. Ici, j'ai adresser une requete pour avoir une image de tigre vêtu d'une armure dorée. J'ai par la suite édité et créer des lumières et couleurs dans photoshop pour atteindre ce resultat."
    },
    {
        "image":"Capture.PNG",
        "tagLine":"Cette image a été réalisé en cours de \"Stratégie de communication\" durant ma licence pro métier du design. Ici, nous devions, créer une direction artistique de zéro pour un produit et ensuite créer tous les visuels pour une potentielle entrée sur le marché."
    },
]
const displayFirstModal = document.querySelector(".overlay")
const closeModal = document.querySelector(".absolute")

buttonSlide.addEventListener("click", (event) =>{
    displayFirstModal.classList.toggle("hidden")
})


closeModal.addEventListener("click", (event) =>{
    displayFirstModal.classList.toggle("hidden")
})


const arrowRight = document.querySelector(".arrow_right")
const arrowLeft = document.querySelector(".arrow_left")
const bannerImg = document.querySelector(".banner-img")
const bannerTxt = document.querySelector("#banner-txt")
let currentSlide = 0
const imgBaseUrl = "image/slideshow/"
const dots = document.querySelector(".dots")

for(let i = 0; i < slides.length; i++){
  let p = document.createElement("p")
  p.setAttribute("class", "dot")
  dots.appendChild(p)
}

let dotsArray = document.querySelectorAll(".dot")

arrowRight.addEventListener("click", (event) => {
  currentSlide++
  if(currentSlide > 11){
    currentSlide = 0
  }
  bannerImg.src = imgBaseUrl + slides[currentSlide].image
  bannerTxt.innerHTML = slides[currentSlide].tagLine
  loop(dotsArray)
});

arrowLeft.addEventListener("click", () => {
  currentSlide--
  if(currentSlide < 0){
    currentSlide = slides.length - 1
  } 
  bannerImg.src = imgBaseUrl + slides[currentSlide].image
  bannerTxt.innerHTML = slides[currentSlide].tagLine
  loop(dotsArray)
});


function loop(dotsArray) {
  dotsArray.forEach((element, index) => {
    if(element.classList.contains("dot_selected") === true){
      element.classList.remove("dot_selected")
    }
    if(index === currentSlide){
      element.classList.toggle("dot_selected")
    }
  });
} 

loop(dotsArray)

function updateCarousel() {
    banner.style.transform = `translateX(${currentTranslate}px)`;
}

(function() {
  var fig = document.querySelectorAll(".circle-web")[0];
  var posImg = fig.offsetTop;
  function effet(){
    var posCurseur = this.pageYOffset;
    if(posImg-posCurseur<5){
      fig.style.top = "150px";
    }else{
      fig.style.top = "340px";
    }
  }
  window.addEventListener("scroll", effet);
})();


(function() {
  var fig = document.querySelectorAll(".circle-illu")[0];
  var posImg = fig.offsetTop;
  function effet(){
    var posCurseur = this.pageYOffset;
    if(posImg-posCurseur<300){
      fig.style.top = "75px";
    }else{
      fig.style.top = "340px";
    }
  }
  window.addEventListener("scroll", effet);
})();

(function() {
  var fig = document.querySelectorAll(".circle-photo")[0];
  var posImg = fig.offsetTop;
  function effet(){
    var posCurseur = this.pageYOffset;
    if(posImg-posCurseur<50){
      fig.style.top = "75px";
    }else{
      fig.style.top = "340px";
    }
  }
  window.addEventListener("scroll", effet);
})();

(function() {
  var fig = document.querySelectorAll(".circle-page")[0];
  var posImg = fig.offsetTop;
  function effet(){
    var posCurseur = this.pageYOffset;
    if(posImg-posCurseur<50){
      fig.style.top = "30px";
    }else{
      fig.style.top = "340px";
    }
  }
  window.addEventListener("scroll", effet);
})();

(function() {
  var fig = document.querySelectorAll(".circle-video")[0];
  var posImg = fig.offsetTop;
  function effet(){
    var posCurseur = this.pageYOffset;
    if(posImg-posCurseur<50){
      fig.style.top = "75px";
    }else{
      fig.style.top = "340px";
    }
  }
  window.addEventListener("scroll", effet);
})();

(function() {
  var fig = document.querySelectorAll(".circle-maquette")[0];
  var posImg = fig.offsetTop;
  function effet(){
    var posCurseur = this.pageYOffset;
    if(posImg-posCurseur<50){
      fig.style.top = "30px";
    }else{
      fig.style.top = "340px";
    }
  }
  window.addEventListener("scroll", effet);
})();

const up = document.querySelector('.arrow');

up.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})