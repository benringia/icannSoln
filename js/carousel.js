$(document).ready(function() {
    $('.carousel').owlCarousel({
        loop:true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        nav: true,
        arrows: true,
        margin: 20,
        responsive: {
            0: {
                items:1
            },
            576: {
                items: 2
            },
            768: {
                items: 4
            }
        }
    })
})