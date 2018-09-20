function myFunction(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    document.getElementById(".demo").innerHTML = x + y;
}

$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});