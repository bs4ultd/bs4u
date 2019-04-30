"use strict";

$(document).ready(function () {
  //accordion
  //
  // $('.accordion-header').click(function() {
  //
  //   //collapse all other accordion
  //   $('.accordion-content').addClass('accordion-collapse');
  //
  //
  //   $(this).next().toggleClass('accordion-collapse');
  //
  // });
  //carousel
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("dot-active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " dot-active";
    setTimeout(showSlides, 3000); // Change image every 5 seconds
  } // //mobile nav bar toggle
  // var hamburger = document.getElementById('hamburger');
  // var navBar = document.getElementById('nav-bar');
  // hamburger.addEventListener("click", function(){
  //   navBar.classList.toggle("active-hamburger")
  // })

});
