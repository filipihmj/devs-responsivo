<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>



$(document).ready(function() {
  $("#carouselMotivos").on("swiperight", carouselRight);
  function carouselRight(e){
    console.log ("funcionou");
    $(e.target).carousel('prev');
    
  };
});