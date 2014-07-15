$(document).ready(function() {	
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
 .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '550px'},
       500,
       function() {
   		 $(this).hide();
   		 $(this).css('left', '-212px');
 		 }
	 );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    });
})


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

$(document).ready(function() {
  $(document).keydown(function(e){
    if (e.which == 88) { 
       $('.ryu-ready').hide();
       $('.ryu-still').hide();
       $('.ryu-cool').show(); //note to mentor: if keyup event is .ryu-ready, image appears below the .ryu div. if reloading using chrome reload button, it does not happen
     }
  })
  .keyup(function(e){
    $('.ryu-cool').hide();
    $('.ryu-ready').hide(); 
    $('.ryu-still').show();
  });
})

