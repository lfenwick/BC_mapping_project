window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

beforeOpen: function lightbox_open() {
  var lightBoxVideo = document.getElementById("video");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function closeMe(){
        t = setTimeout("self.close()",3000);
    }

function lightbox_close() {
  var lightBoxVideo = document.getElementById("video");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
  video.currentTime = 0;
}




////////////////////////////////////////
// Our Script 
////////////////////////////////////////
$(document).ready(function(){
  // Initiate FitVid.js
  $(".video-container").fitVids();

  // Iframe/player variables
  var iframe = $('#video')[0];
  var player = $f(iframe);

  // Open on play
  $('.play').click(function(){
    $('.overlay').css('left', 0)
    $('.overlay').addClass('show')
    player.api("play");
  })

  // Closes on click outside
  $('.overlay').click(function(){
    $('.overlay').removeClass('show')
    setTimeout(function() {
      $('.overlay').css('left', '-100%')
    }, 300);
    player.api("pause");
  })
});



