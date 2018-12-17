"use strict";
$(document).ready(function($) {
  $('.recalls__control--next-slide').click(function (){
    var currentSlide = $('.recalls__slide-wrapper--current');
    var currentSlideIndex = currentSlide.index();
    var nextSlideIndex = currentSlideIndex + 1;
    var nextSlide = $(".recalls__slide-wrapper").eq(nextSlideIndex);
    currentSlide.fadeOut(1000);
    currentSlide.removeClass('recalls__slide-wrapper--current');

    if (nextSlideIndex == ($(".recalls__slide-wrapper:last").index()+1)){
      $('.recalls__slide-wrapper').eq(0).fadeIn(1000);
      $('.recalls__slide-wrapper').addClass('recalls__slide-wrapper--current');
    }
    else{
      nextSlide.fadeIn(1000);
      nextSlide.addClass('recalls__slide-wrapper--current');
    }
  });
  $('.recalls__control--prev-slide').click(function() {
    var currentSlide = $('.recalls__slide-wrapper--current');
    var currentSlideIndex = currentSlide.index();
    var prevSlideIndex = currentSlideIndex - 1;
    var prevSlide = $(".recalls__slide-wrapper").eq(prevSlideIndex);
    currentSlide.fadeOut(1000);
    currentSlide.removeClass('recalls__slide-wrapper--current');
    prevSlide.fadeIn(1000);
    prevSlide.addClass('recalls__slide-wrapper--current');
  });
});