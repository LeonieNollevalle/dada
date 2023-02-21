let startButton = document.querySelector('.starter')
let startVideo = document.querySelector('#video')
let startVideo2 = document.querySelector('#video2')
let videoContainer = document.querySelector('#videoContainer')

startButton.addEventListener('click', function(){
startButton.classList.add('hidden')
startVideo.play();
setTimeout(() => {
  videoContainer.classList.remove('hidden');
  videoContainer.classList.add('road'); 
  startVideo2.play(); 
  startVideo.classList.add('hidden');
}, "15000")
});