
$( document ).ready(function() {
$( ".letter-wrapper" ).click(function() {
  $( ".hp-about").toggleClass( "fadeinright" );
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

$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				title: "Bubble",
				wav: "../../assets/audio/issues/01_first/1typewritteninStone.wav",
				oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
			});
		},
		swfPath: "assets/js/jplayer",
		supplied: "wav, m4a, oga",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});



});


