$(document).ready(function(){
    $(".owl-touch").owlCarousel({
        navigation : true,
        loop : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        items: 1,

        responsive: {
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
});