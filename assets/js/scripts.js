
$( document ).ready(function() {
$( ".letter-wrapper" ).click(function() {
  $( ".hp-about").toggleClass( "fadeinright" );
});

$( ".close" ).click(function() {
  $( ".hp-about").toggleClass( "fadeinright").addClass("slide-out");
});
});


