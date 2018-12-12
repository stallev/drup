"use strict";
$(document).ready(function($) {
  $('.recalls__control--next-slide').click(function (){
    var currentSlide = $('.recalls__slide--current');
    var currentSlideIndex = currentSlide.index();
    var nextSlideIndex = currentSlideIndex + 1;
    var nextSlide = $(".recalls__slide").eq(nextSlideIndex);
    currentSlide.fadeOut(1000);
    currentSlide.removeClass('recalls__slide--current');

    if (nextSlideIndex == ($(".recalls__slide:last").index()+1)){
      $('.recalls__slide').eq(0).fadeIn(1000);
      $('.recalls__slide').addClass('recalls__slide--current');
    }
    else{
      nextSlide.fadeIn(1000);
      nextSlide.addClass('recalls__slide--current');
    }
  });
  $('.recalls__control--prev-slide').click(function() {
    var currentSlide = $('.recalls__slide--current');
    var currentSlideIndex = currentSlide.index();
    var prevSlideIndex = currentSlideIndex - 1;
    var prevSlide = $(".recalls__slide").eq(prevSlideIndex);
    currentSlide.fadeOut(1000);
    currentSlide.removeClass('recalls__slide--current');
    prevSlide.fadeIn(1000);
    prevSlide.addClass('recalls__slide--current');
  });
});