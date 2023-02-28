window.onload = () => {
  let phonopaper = new Audio("../assets/sounds/phonopaper.mp3");
  let crash = document.querySelector("body");

  crash.addEventListener("click", function () {
    phonopaper.play();
  });
};
