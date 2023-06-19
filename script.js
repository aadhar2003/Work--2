// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

$(window).on("load", function () {
  $("#preloader").fadeOut();
});
const but = document.querySelector(".button");
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".nav");
const section = document.querySelector(".section-one");
const toggleNavBar = () => {
  nav_header.classList.toggle("activ");
  but.classList.toggle("activu");
  // section.classList.toggle('overflow');
};

mobile_nav.addEventListener("click", () => toggleNavBar());


$('.mobile-navbar-btn').click(function(){
  if ( $('.section-one').css('overflow') == 'hidden' )
    $('.section-one').css('overflow','visible');
  else
    $('.section-one').css('overflow','hidden');
});
$('.mobile-navbar-btn').click(function(){
  if ( $('.cont').css('display') == 'flex' )
    $('.cont').css('display','none');
  else
    $('.cont').css('display','flex');
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

