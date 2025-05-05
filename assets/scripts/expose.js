// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById("horn-select");
  let volumeControls = document.getElementById("volume");

  let hornImage = document.querySelector("img");
  let hornSound = document.getElementsByClassName("hidden");

  let volumeImage = document.querySelector("#volume-controls img:first-of-type");


  hornSelect.addEventListener("change", function() {
    let selectedHorn = hornSelect.value;

    if (selectedHorn == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornSound.src = "assets/audio/air-horn.mp3";
    } else if (selectedHorn == "car-horn") {
        hornImage.src = "assets/images/car-horn.svg";
        hornSound.src = "assets/audio/car-horn.mp3";
    } else if (selectedHorn == "party-horn") {
        hornImage.src = "assets/images/party-horn.svg";
        hornSound.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeControls.addEventListener("input", function() {
    let selectedVolume = volumeControls.value;
    console.log(selectedVolume);
    let hornVolume = document.createElement("audio");
    hornVolume.volume = selectedVolume / 100;


    if (selectedVolume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      console.log(hornVolume.volume);
    }
    else if (selectedVolume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      console.log(hornVolume.volume);
    }
    else if (selectedVolume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      console.log(hornVolume.volume);
    }
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      console.log(hornVolume.volume);
    }

  });
  
};