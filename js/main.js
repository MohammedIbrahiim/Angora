$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:20,
        loop:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }

    });
  });