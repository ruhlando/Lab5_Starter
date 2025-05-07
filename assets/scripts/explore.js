// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;

  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const speakTextButton = document.querySelector("button");

  const smilingFacePicture = document.querySelector("img");

  let voices = [];


  function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase();
      const bname = b.name.toUpperCase();
  
      if (aname < bname) {
        return -1;
      } else if (aname == bname) {
        return 0;
      } else {
        return +1;
      }
    });
    
    const selectedIndex =
      voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = "";
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " -- DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
  }
  
  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function speak() {
    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }
  
    if (inputTxt.value !== "") {
      const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
      console.log("startedlol");
      smilingFacePicture.src = "assets/images/smiling-open.png";
  
      utterThis.onend = function (event) {
        console.log("SpeechSynthesisUtterance.onend");
        smilingFacePicture.src = "assets/images/smiling.png";
        
      };
  
      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
      };
  
      const selectedOption =
        voiceSelect.selectedOptions[0].getAttribute("data-name");
  
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
          break;
        }
      }
      synth.speak(utterThis);
    }
  }
  
  speakTextButton.onclick = function (event) {
    event.preventDefault();
  
    speak();
  
    inputTxt.blur();  
  }

  
}