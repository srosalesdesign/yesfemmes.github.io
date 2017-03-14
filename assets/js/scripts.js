
$( document ).ready(function() {
$( ".about a" ).click(function() {
  $( ".about-details").toggleClass( "fadeinright");
  $("#main").toggleClass("no-scroll")
});



$( ".close" ).click(function() {
    $( ".about-details").toggleClass( "fadeinright").addClass("slide-out");
    $("#main").toggleClass("no-scroll")
 });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



 $('#fullpage').fullpage({

    scrollingSpeed: 600,
    easing: 'easeOutBounce',
    scrollOverflow:true,


 });

$(".authors li ").hover(
        function () {
            $(".preview-wrapper").fadeIn();
        },
        function () {
            $(".preview-wrapper").fadeOut();
        }
    );



  $('body').addClass('loaded');


    
});



plyr.setup();

var controller = new ScrollMagic.Controller();


// build scene
    var scene = new ScrollMagic.Scene({
                                    triggerElement: "#issue-section"
                                })
                                .setClassToggle(".letter", "fix") // add class toggle
                                //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

                                // build scene
    var scene = new ScrollMagic.Scene({
                                    triggerElement: "#issue-section"
                                })
                                .setClassToggle(".letter-wrapper a", "no-link") // add class toggle
                                //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                .addTo(controller);

     







