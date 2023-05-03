const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $fordward = document.querySelector("#fordward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$fordward.addEventListener("click", handleFordward);

function handlePlay() {
  console.log("Le diste al boton de play");
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause() {
  console.log("Le diste al boton de pausa");
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}
function handleBackward(){
  $video.currentTime -=10;
  console.log("Para atras 10 segundos");
}
function handleFordward(){
  $video.currentTime +=10;
  console.log("Para adelante 10 segundos");
}

const $progress = document.querySelector('#progress');
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
}
function handleTimeUpdate(){
  $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
}