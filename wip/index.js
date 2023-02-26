window.onload =()=>{

// gear-lever step

let knob = document.querySelector ('.knob');
let speedOne = document.querySelector ('#vitesse1');
let speedTwo = document.querySelector ('#vitesse2');
let speedThree = document.querySelector ('#vitesse3');
let speedFour = document.querySelector ('#vitesse4');
let speedFive = document.querySelector ('#vitesse5');
let crash = document.querySelector ('#crash');

// Container of Body parts

let head = document.querySelector('#head');
let trunk = document.querySelector('#trunk');
let arm1 = document.querySelector('#arm1');
let arm2 = document.querySelector('#arm2');
let numberplate = document.querySelector('#numberplate');
let leg1 = document.querySelector('#leg1');
let leg2 = document.querySelector('#leg2');
let foot1 = document.querySelector('#foot1');
let foot2 = document.querySelector('#foot2');
let sticker = document.querySelector('#sticker');


// Body parts 

let headImg = document.querySelector('#headImg');
let trunkImg = document.querySelector('#trunkImg');
let arm1Img = document.querySelector('#arm1Img');
let arm2Img = document.querySelector('#arm2Img');
let leg1Img = document.querySelector('#leg1Img');
let leg2Img = document.querySelector('#leg2Img');
let foot1Img = document.querySelector('#foot1Img');
let foot2Img = document.querySelector('#foot2Img');

// variable loop Sounds
var loopTime = 5333;
var intervalId = null;

// Sounds
let blinker = new Audio('../assets/sounds/blinker.mp3');
let engine = new Audio('../assets/sounds/car.mp3');
let factory = new Audio('../assets/sounds/factory-.mp3');
let metal = new Audio('../assets/sounds/metal-impact.mp3');
let klaxon = new Audio('../assets/sounds/klaxon.mp3');
let frein = new Audio('../assets/sounds/car-skid.mp3');

// css file
let cssLink = document.querySelector('#css');


speedOne.addEventListener('click', function(){
  speedOne.style.color = 'red';
  knob.style.top = "23%";
  knob.style.left = "5%";
  head.classList.remove('hidden');
  head.classList.add('head');
});

speedTwo.addEventListener('click', function(){
  if (head.className != 'hidden'){
    speedOne.style.color = 'white';
    speedTwo.style.color = 'red';
    knob.style.top = "57%";
    knob.style.left = "5%";
    trunk.classList.remove('hidden');
    trunk.classList.add('trunk');
  } else {
    alert('Passe la première !')
  }
  
});

speedThree.addEventListener('click', function(){
  if (trunk.className != 'hidden'){
  speedTwo.style.color = 'white';
  speedThree.style.color = 'red';
  knob.style.top = "23%";
  knob.style.left = "25%";
  arm1.classList.remove('hidden');
  arm1.classList.add('arm1');
  arm2.classList.remove('hidden');
  arm2.classList.add('arm2');
  } else {
    alert('Passe la seconde !')
  }
  
});

speedFour.addEventListener('click', function(){
  if (arm1.className != 'hidden'){
    speedThree.style.color = 'white';
    speedFour.style.color = 'red';
    knob.style.top = "58%";
    knob.style.left = "25%";
    foot1.classList.remove('hidden');
    foot1.classList.add('foot1');
    foot2.classList.remove('hidden');
    foot2.classList.add('foot2');
    numberplate.classList.remove('hidden');
    numberplate.classList.add('numberplate');
  }
  else {
    alert('Passe la troisième !')
  }
  
});

speedFive.addEventListener('click', function(){
  if (foot1.className != 'hidden'){
    speedFour.style.color = 'white';
    speedFive.style.color = 'red';
    knob.style.top = "24%";
    knob.style.left = "45%";
    leg1.classList.remove('hidden');
    leg1.classList.add('leg1');
    leg2.classList.remove('hidden');
    leg2.classList.add('leg2');
    sticker.classList.remove('hidden');
    sticker.classList.add('sticker');
  } else {
    alert('Passe la quatrième !')
  }
  
});



headImg.addEventListener('click', function(){
  headImg.src = "../assets/images/edited-body/head.png";
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    blinker.currentTime = 0;  
  }
  blinker.volume = 0.5;
  blinker.play();
  blinker.currentTime = 0;
  head.classList.add('transformed');


})

trunkImg.addEventListener('click', function(){
  trunkImg.style.width='125%';
  trunkImg.src = "../assets/images/edited-body/trunk.png"
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    engine.currentTime = 0;  
  }
  engine.volume=0.15;
  engine.play();
  engine.currentTime = 0;
})

arm1Img.addEventListener('click', function(){
  arm1Img.src = "../assets/images/edited-body/arm2.png"
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    metal.currentTime = 0;  
  }
  metal.volume=0.15;
  metal.play();
  metal.currentTime = 0;
})

arm2Img.addEventListener('click', function(){
  arm2Img.src = "../assets/images/edited-body/arm2.png"
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    metal.currentTime = 0;  
  }
  metal.volume=0.15;
  metal.play();
  metal.currentTime = 0;
})

leg1Img.addEventListener('click', function(){
  leg1Img.style.zIndex = "20"
  leg1Img.src = "../assets/images/edited-body/leg1.png"
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    factory.currentTime = 0;  
  }
  factory.volume=0.5;
  factory.play();
  factory.currentTime = 0;
})

leg2Img.addEventListener('click', function(){
  leg2Img.style.zIndex = "20"
  leg2Img.src = "../assets/images/edited-body/leg2.png"
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    factory.currentTime = 0;  
  }
  factory.volume=0.5;
  factory.play();
  factory.currentTime = 0;
})

foot1Img.addEventListener('click', function(){
  foot1Img.style.width='130%';
  foot1Img.src = "../assets/images/edited-body/foot2.png"
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    frein.currentTime = 0;  
  }
  frein.volume=0.5;
  frein.play();
  frein.currentTime = 0;
})

foot2Img.addEventListener('click', function(){
  foot2Img.style.width='130%';
  foot2Img.src = "../assets/images/edited-body/foot2.png"
  intervalId = setInterval(doLoop, loopTime);
  function doLoop(){
    frein.currentTime = 0;  
  }
  frein.volume=0.5;
  frein.play();
  frein.currentTime = 0;
})

numberplate.addEventListener('click', function(){
  klaxon.play();
})



if (1 > 0) {
  console.log("nullos")
}

}