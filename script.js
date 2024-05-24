function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

function stop() {
  var audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
}