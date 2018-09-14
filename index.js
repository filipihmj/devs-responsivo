 
 window.addEventListener("load", function(){
    $(document).ready(function() {  
        $("#carouselGaleria").swiperight(function() {  
           $(this).carousel('prev');  
             });  
        $("#carouselGaleria").swipeleft(function() {  
           $(this).carousel('next');  
    });  
 }); 
    });
