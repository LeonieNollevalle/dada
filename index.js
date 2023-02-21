let startButton = document.querySelector('.starter')
let startIntroVideo = document.querySelector('#intro-video')
let startRoadVideo = document.querySelector('#road-video')
let videoContainer = document.querySelector('#video-container')

startButton.addEventListener('click', function(){
startButton.classList.add('hidden')
startIntroVideo.play();
setTimeout(() => {
  videoContainer.classList.remove('hidden');
  videoContainer.classList.add('road'); 
  startRoadVideo.play(); 
  startIntroVideo.classList.add('hidden');
}, "15000")
});