function myFunction(event) {
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    document.getElementById(".demo").innerHTML = x + ", " + y;
}