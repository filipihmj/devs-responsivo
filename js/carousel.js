$(document).ready(function(){
    $(".owl-touch").owlCarousel({
        navigation : true,
        loop : true,
        center: true,
        singleItem : true,
        items: 1,

        responsive: {
            768: {
                items: 2,
            },
            1030: {
                items: 3,
            }
        }
    });
});

$(document).ready(function(){
    $("#owl-carousel-galeria").owlCarousel({
        navigation : true,
        loop : true,
        center: true,
        singleItem : true,
        items: 1,

        responsive: {
            768: {
                items: 1,
            },
            1030: {
                items: 2,
            }
        }
    });
});