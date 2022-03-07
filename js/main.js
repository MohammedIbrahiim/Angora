$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:20,
        loop:true,
        responsive:{
            1200:{
                items:4
            },
            300:{
                items:2
            }
        }
  

    });
  });