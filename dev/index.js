// INTRODUCTION

// Variables utiles à l'intro

let startButton = document.querySelector(".starter");
let startIntroVideo = document.querySelector("#intro-video");
let startRoadVideo = document.querySelector("#road-video");
let videoContainer = document.querySelector("#video-container");
let containerIntro = document.querySelector(".intro");

// Fonction pour lancer la vidéo d'intro au clic

startButton.addEventListener("click", function () {
  startButton.classList.add("hidden");
  startIntroVideo.play();
  setTimeout(() => {
    videoContainer.classList.remove("hidden");
    videoContainer.classList.add("road");
    startRoadVideo.play();
    containerIntro.classList.remove("intro");
    containerIntro.classList.remove("hidden");
    startIntroVideo.classList.add("hidden");
  }, "15000");
});

window.onload = () => {
  // Variables des différents éléments du levier de vitesse

  let knob = document.querySelector(".knob");
  let speedOne = document.querySelector("#vitesse1");
  let speedTwo = document.querySelector("#vitesse2");
  let speedThree = document.querySelector("#vitesse3");
  let speedFour = document.querySelector("#vitesse4");
  let speedFive = document.querySelector("#vitesse5");
  let crash = document.querySelector("#crash");

  // MISE EN PLACE DES VARIABLES

  // Variables des div contenant les images de parties du corps

  let head = document.querySelector("#head");
  let trunk = document.querySelector("#trunk");
  let arm1 = document.querySelector("#arm1");
  let arm2 = document.querySelector("#arm2");
  let numberplate = document.querySelector("#numberplate");
  let leg1 = document.querySelector("#leg1");
  let leg2 = document.querySelector("#leg2");
  let foot1 = document.querySelector("#foot1");
  let foot2 = document.querySelector("#foot2");
  let sticker = document.querySelector("#sticker");

  // Variables des images de parties du corps

  let headImg = document.querySelector("#headImg");
  let trunkImg = document.querySelector("#trunkImg");
  let arm1Img = document.querySelector("#arm1Img");
  let arm2Img = document.querySelector("#arm2Img");
  let leg1Img = document.querySelector("#leg1Img");
  let leg2Img = document.querySelector("#leg2Img");
  let foot1Img = document.querySelector("#foot1Img");
  let foot2Img = document.querySelector("#foot2Img");

  // Variables utiles aux boucles sonores

  var loopTime = 5333;
  var intervalId = null;

  // Variables des différents sons

  let blinker = new Audio("../assets/sounds/blinker.mp3");
  let engine = new Audio("../assets/sounds/car.mp3");
  let factory = new Audio("../assets/sounds/factory-.mp3");
  let metal = new Audio("../assets/sounds/metal-impact.mp3");
  let klaxon = new Audio("../assets/sounds/klaxon.mp3");
  let frein = new Audio("../assets/sounds/car-skid.mp3");
  let futur = new Audio("../assets/sounds/Futuristic-interface.mp3");

  // Variable récupérant le lien CSS

  var cssLink = document.getElementById("css");

  // Mise en place de la vitesse initiale de la vidéo

  startRoadVideo.playbackRate = 1;

  // Fonction permettant de changer le fichier CSS et passer à l'étape 2, seulement si tous les éléments sont déjà transformés

  function goToStep2() {
    let transformed = document.getElementsByClassName("transformed");
    if (transformed.length == 9) {
      cssLink.setAttribute("href", "assemble.css");
      foot1Img.src = "../assets/images/edited-body/foot1.png";
      arm1Img.src = "../assets/images/edited-body/arm1.png";
    }
  }

  // FONCTIONS DU LEVIER DE VITESSE

  // Fonction permettant d'afficher la tête au clic sur la vitesse 1 du levier de vitesse
  // Change également la couleur du chiffre sélectionné, la position du levier et accélère la vidéo

  speedOne.addEventListener("click", function () {
    speedOne.style.color = "red";
    knob.style.top = "23%";
    knob.style.left = "5%";
    head.classList.remove("hidden");
    head.classList.add("head");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
  });

  // Fonction permettant d'afficher le tronc au clic sur la vitesse 2 du levier de vitesse
  // Change également la couleur du chiffre sélectionné, la position du levier et accélère la vidéo

  speedTwo.addEventListener("click", function () {
    if (head.className != "hidden") {
      speedOne.style.color = "white";
      speedTwo.style.color = "red";
      knob.style.top = "57%";
      knob.style.left = "5%";
      trunk.classList.remove("hidden");
      trunk.classList.add("trunk");
      startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    } else {
      alert("Passe la première !");
    }
  });

  // Fonction permettant d'afficher les bras au clic sur la vitesse 3 du levier de vitesse
  // Change également la couleur du chiffre sélectionné, la position du levier et accélère la vidéo

  speedThree.addEventListener("click", function () {
    if (trunk.className != "hidden") {
      speedTwo.style.color = "white";
      speedThree.style.color = "red";
      knob.style.top = "23%";
      knob.style.left = "25%";
      arm1.classList.remove("hidden");
      arm1.classList.add("arm1");
      arm2.classList.remove("hidden");
      arm2.classList.add("arm2");
      startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    } else {
      alert("Passe la seconde !");
    }
  });

  // Fonction permettant d'afficher les pieds et la plaque d'immatriculation au clic sur la vitesse 4 du levier de vitesse
  // Change également la couleur du chiffre sélectionné, la position du levier et accélère la vidéo

  speedFour.addEventListener("click", function () {
    if (arm1.className != "hidden") {
      speedThree.style.color = "white";
      speedFour.style.color = "red";
      knob.style.top = "58%";
      knob.style.left = "25%";
      foot1.classList.remove("hidden");
      foot1.classList.add("foot1");
      foot2.classList.remove("hidden");
      foot2.classList.add("foot2");
      numberplate.classList.remove("hidden");
      numberplate.classList.add("numberplate");
      startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    } else {
      alert("Passe la troisième !");
    }
  });

  // Fonction permettant d'afficher les jambes et le sticker au clic sur la vitesse 5 du levier de vitesse
  // Change également la couleur du chiffre sélectionné, la position du levier et accélère la vidéo

  speedFive.addEventListener("click", function () {
    if (foot1.className != "hidden") {
      speedFour.style.color = "white";
      speedFive.style.color = "red";
      knob.style.top = "24%";
      knob.style.left = "45%";
      leg1.classList.remove("hidden");
      leg1.classList.add("leg1");
      leg2.classList.remove("hidden");
      leg2.classList.add("leg2");
      sticker.classList.remove("hidden");
      sticker.classList.add("sticker");
      startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    } else {
      alert("Passe la quatrième !");
    }
  });

  // FONCTIONS DE TRANSFORMATION DES PARTIES DU CORPS

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur la tête

  headImg.addEventListener("click", function () {
    headImg.src = "../assets/images/edited-body/head.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      blinker.currentTime = 0;
    }
    blinker.volume = 0.5;
    blinker.play();
    blinker.currentTime = 0;
    head.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur le tronc

  trunkImg.addEventListener("click", function () {
    trunkImg.style.width = "125%";
    trunkImg.src = "../assets/images/edited-body/trunk.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      engine.currentTime = 0;
    }
    engine.volume = 0.15;
    engine.play();
    engine.currentTime = 0;
    trunk.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur le premier bras

  arm1Img.addEventListener("click", function () {
    arm1Img.src = "../assets/images/edited-body/arm2.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      metal.currentTime = 0;
    }
    metal.volume = 0.15;
    metal.play();
    metal.currentTime = 0;
    arm1.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur le deuxième bras

  arm2Img.addEventListener("click", function () {
    arm2Img.src = "../assets/images/edited-body/arm2.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      metal.currentTime = 0;
    }
    metal.volume = 0.15;
    metal.play();
    metal.currentTime = 0;
    arm2.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur la première jambe

  leg1Img.addEventListener("click", function () {
    leg1Img.style.zIndex = "20";
    leg1Img.src = "../assets/images/edited-body/leg1.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      factory.currentTime = 0;
    }
    factory.volume = 0.5;
    factory.play();
    factory.currentTime = 0;
    leg1.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur la deuxième jambe

  leg2Img.addEventListener("click", function () {
    leg2Img.style.zIndex = "20";
    leg2Img.src = "../assets/images/edited-body/leg2.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      factory.currentTime = 0;
    }
    factory.volume = 0.5;
    factory.play();
    factory.currentTime = 0;
    leg2.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur le premier pied

  foot1Img.addEventListener("click", function () {
    foot1Img.style.width = "130%";
    foot1Img.src = "../assets/images/edited-body/foot2.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      frein.currentTime = 0;
    }
    frein.volume = 0.5;
    frein.play();
    frein.currentTime = 0;
    foot1.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant de changer la source de l'image et émettre un son au clic sur le deuxième pied

  foot2Img.addEventListener("click", function () {
    foot2Img.style.width = "130%";
    foot2Img.src = "../assets/images/edited-body/foot2.png";
    intervalId = setInterval(doLoop, loopTime);
    function doLoop() {
      frein.currentTime = 0;
    }
    frein.volume = 0.5;
    frein.play();
    frein.currentTime = 0;
    foot2.classList.add("transformed");
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
    goToStep2();
  });

  // Fonction permettant d'émettre un son au clic sur la plaque d'immatriculation

  numberplate.addEventListener("click", function () {
    klaxon.play();
    numberplate.classList.add("transformed");
    futur.play();
    goToStep2();
    startRoadVideo.playbackRate = startRoadVideo.playbackRate + 0.5;
  });

  // Fonction permettant de passer à la troisième étape
  // Met en pause tous les sons précédents, joue les sons de dérapage et de crash, change le fichier html

  crash.addEventListener("click", function () {
    let transformed = document.getElementsByClassName("transformed");
    if (transformed.length == 9) {
      let carCrash = new Audio("../assets/sounds/car-crash.mp3");
      let carSkid = new Audio("../assets/sounds/car-skid.mp3");
      klaxon.pause();
      frein.pause();
      engine.pause();
      blinker.pause();
      factory.pause();
      startRoadVideo.pause();
      futur.pause();
      carSkid.play();
      carCrash.play();
      setTimeout(() => {
        window.location.href = "crash.html";
      }, 1200);
    } else {
      alert("Transformer le corps en cliquant sur chacune des parties !");
    }
  });
};
