
$( document ).ready(function() {
$( ".letter-wrapper" ).click(function() {
  $( ".hp-about").toggleClass( "fadeinright" );
});

$( ".close" ).click(function() {
 	$( ".hp-about").toggleClass( "fadeinright").addClass("slide-out");
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

(function() { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  // e.g. just plyr.setup(); and leave it at that if you have no need for events

  var controls = ["<div class='plyr__controls'>",
    "<button type='button' data-plyr='restart'>",
        "<svg><use xlink:href='#plyr-restart'></use></svg>",
        "<span class='plyr__sr-only'>Restart</span>",
    "</button>",
    "<button type='button' data-plyr='rewind'>",
        "<svg><use xlink:href='#plyr-rewind'></use></svg>",
        "<span class='plyr__sr-only'>Rewind {seektime} secs</span>",
    "</button>",
    "<button type='button' data-plyr='play'>",
        "<svg><use xlink:href='#plyr-play'></use></svg>",
        "<span class='plyr__sr-only'>Play</span>",
    "</button>",
    "<button type='button' data-plyr='pause'>",
        "<svg><use xlink:href='#plyr-pause'></use></svg>",
        "<span class='plyr__sr-only'>Pause</span>",
    "</button>",
    "<button type='button' data-plyr='fast-forward'>",
        "<svg><use xlink:href='#plyr-fast-forward'></use></svg>",
        "<span class='plyr__sr-only'>Forward {seektime} secs</span>",
    "</button>",
    "<span class='plyr__progress'>",
        "<label for='seek{id}' class='plyr__sr-only'>Seek</label>",
        "<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>",
        "<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>",
        "<progress class='plyr__progress--buffer' max='100' value='0'>",
            "<span>0</span>% buffered",
        "</progress>",
        "<span class='plyr__tooltip'>00:00</span>",
    "</span>",
    "<span class='plyr__time'>",
        "<span class='plyr__sr-only'>Current time</span>",
        "<span class='plyr__time--current'>00:00</span>",
    "</span>",
    "<span class='plyr__time'>",
        "<span class='plyr__sr-only'>Duration</span>",
        "<span class='plyr__time--duration'>00:00</span>",
    "</span>",
    "<button type='button' data-plyr='mute'>",
        "<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>",
        "<svg><use xlink:href='#plyr-volume'></use></svg>",
        "<span class='plyr__sr-only'>Toggle Mute</span>",
    "</button>",
    "<span class='plyr__volume'>",
        "<label for='volume{id}' class='plyr__sr-only'>Volume</label>",
        "<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='5' data-plyr='volume'>",
        "<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>",
    "</span>",
    "<button type='button' data-plyr='captions'>",
        "<svg class='icon--captions-on'><use xlink:href='#plyr-captions-on'></use></svg>",
        "<svg><use xlink:href='#plyr-captions-off'></use></svg>",
        "<span class='plyr__sr-only'>Toggle Captions</span>",
    "</button>",
    "<button type='button' data-plyr='fullscreen'>",
        "<svg class='icon--exit-fullscreen'><use xlink:href='#plyr-exit-fullscreen'></use></svg>",
        "<svg><use xlink:href='#plyr-enter-fullscreen'></use></svg>",
        "<span class='plyr__sr-only'>Toggle Fullscreen</span>",
    "</button>",
"</div>"].join("");


  var instances = plyr.setup({
    // Output to console
    debug: true
  });

  

  

 
})();


