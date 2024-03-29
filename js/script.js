const buttonSlide = document.querySelector(".voirplus")
const displayOverlay = document.querySelector(".overlay")
const displayGallery = document.querySelector(".modal-container")
const displayForm = document.querySelector(".modal-form")
const closeModalGallery = document.querySelector(".absolute")
const closeModalForm = document.querySelector(".close")
const form = document.querySelector(".content-form")

buttonSlide.addEventListener("click", (event) =>{
    displayOverlay.classList.toggle("hidden")
    displayGallery.classList.toggle("hidden")
});

form.addEventListener("click", (event) =>{
    displayOverlay.classList.toggle("hidden")
    displayForm.classList.toggle("hidden")
});

closeModalGallery.addEventListener("click", (event) =>{
    displayOverlay.classList.toggle("hidden")
    displayGallery.classList.toggle("hidden")
});

closeModalForm.addEventListener("click", (event) =>{
    displayOverlay.classList.toggle("hidden")
    displayForm.classList.toggle("hidden")
});

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
      fig.style.top = "30px";
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
      fig.style.top = "75px";
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

(function($){
$('.banner').owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items : 1
    },

    768: {
      items : 1
    },

    1024: {
      items : 1
    },
  }
})
})(jQuery);