"use strict";


$('[data-fancybox="gallery"]').fancybox({
	    loop: true
});


$(function(){
    $('.navigation').navpoints({
        speed: 1000
    });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
        loop:true,
        items:1,
        responsiveClass:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
    
        responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        1000:{
            items:1,
            loop:true
        }       
    }});
});  
