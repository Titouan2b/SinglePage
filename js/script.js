const buttonSlide = document.querySelector(".voirplus")
const slides = [
    {
        "image":"Ynak mosaique (1).jpg",
        "tagLine":"le texte du projet 1"
    },
    {
        "image":"Post-Kushy1.jpg",
        "tagLine":"le texte du projet 2"
    },
    {
        "image":"NFT-Diablo.jpg",
        "tagLine":"le texte du projet 3"
    },
    {
        "image":"Cover-DIABLO.jpg",
        "tagLine":"le texte du projet 4"
    },
    {
        "image":"Matthieu Rech Illustration.jpg",
        "tagLine":"le texte du projet 5"
    },
    {
        "image":"Affiche-Alex-V13.jpg",
        "tagLine":"le texte du projet 6"
    },
    {
        "image":"Capture1.PNG",
        "tagLine":"le texte du projet 7"
    },
    {
        "image":"capture2.PNG",
        "tagLine":"le texte du projet 8"
    },
    {
        "image":"gtr.png",
        "tagLine":"le texte du projet 9"
    },
    {
        "image":"Matthieu Rech 2.jpg",
        "tagLine":"le texte du projet 10"
    },
    {
        "image":"white tiger ai.png",
        "tagLine":"le texte du projet 11"
    },
    {
        "image":"Capture.PNG",
        "tagLine":"le texte du projet 12"
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

const carousel = document.querySelector(".carousel")
let isDragging = false
let startPos = 0
let currentTranslate = 0
let prevTranslate = 0

banner.addEventListener('touchstart', touchStart)
banner.addEventListener('touchmove', touchMove)
banner.addEventListener('touchend', touchEnd)


function touchStart(event) {
    startPos = event.touches[0].clientX;
    isDragging = true;
}

touchStart()

function touchMove(event) {
    if (!isDragging) return;
    const currentPosition = event.touches[0].clientX;
    currentTranslate = prevTranslate + currentPosition - startPos;
}

touchMove()

function touchEnd() {
    isDragging = false;
    prevTranslate = currentTranslate;
}

touchEnd()

function updateCarousel() {
    banner.style.transform = `translateX(${currentTranslate}px)`;
  }
  