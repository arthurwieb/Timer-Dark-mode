import {
  buttonPlay,
  buttonStop,
  addTime,
  removeTime,
  minutesDisplay,
  buttonCoffee,
  buttonRain,
  buttonForest,
  buttonFire,
  forestBg,
  forestFill,
  rainBg,
  rainFill,
  coffeeBg,
  coffeeFill,
  fireBg,
  fireFill,
  themeIconSun,
  themeIconMoon,
  sliderForest,
  sliderRain,
  sliderCoffee,
  sliderFire,
  buttonPause,
} from "./elements.js";

export default function ({ timer, audio }) {
  function turnOn(moodBg, moodFill) {
    moodBg.classList.toggle("bgOn");
    moodBg.classList.toggle("bgOff");
    moodFill.classList.toggle("fillOn");
    moodFill.classList.toggle("fillOff");
  }

  function togglePlay(myAudio) {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
  }

  function sliderSetVolume(audioRange, myAudio) {
    var volume = document.getElementById(audioRange).value;
    myAudio.volume = volume;
  }

  let minutes = Number(minutesDisplay.textContent);

  buttonPlay.addEventListener("click", function () {
    buttonPause.classList.remove("hide");
    buttonPlay.classList.add("hide");
    timer.countdown();
  });

  buttonStop.addEventListener("click", function () {
    timer.resetTimer();
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  });

  buttonPause.addEventListener("click", function () {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
    timer.pause();
  });

  addTime.addEventListener("click", function () {
    minutesDisplay.textContent = String(
      Number(minutesDisplay.textContent) + 5
    ).padStart(2, "0");
    minutes = minutesDisplay.textContent;
  });

  removeTime.addEventListener("click", function () {
    if (minutesDisplay.textContent > 0) {
      minutesDisplay.textContent = String(
        Number(minutesDisplay.textContent) - 5
      ).padStart(2, "0");
      minutes = minutesDisplay.textContent;
    } else {
      return;
    }
  });

  buttonCoffee.addEventListener("click", function () {
    togglePlay(audio.Coffee);
    turnOn(coffeeBg, coffeeFill);
  });

  buttonRain.addEventListener("click", function () {
    togglePlay(audio.Rain);
    turnOn(rainBg, rainFill);
  });

  buttonForest.addEventListener("click", function () {
    audio.Forest.volume = 1;
    togglePlay(audio.Forest);
    turnOn(forestBg, forestFill);
  });

  buttonFire.addEventListener("click", function () {
    togglePlay(audio.Fire);
    turnOn(fireBg, fireFill);
  });

  sliderForest.addEventListener("input", function () {
    sliderSetVolume("forestRange", audio.Forest);
  });

  sliderRain.addEventListener("input", function () {
    sliderSetVolume("rainRange", audio.Rain);
  });

  sliderFire.addEventListener("input", function () {
    sliderSetVolume("fireRange", audio.Fire);
  });

  sliderCoffee.addEventListener("input", function () {
    sliderSetVolume("coffeeRange", audio.Coffee);
  });

  themeIconSun.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    themeIconSun.classList.toggle("hide");
    themeIconMoon.classList.toggle("hide");
  });

  themeIconMoon.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    themeIconSun.classList.toggle("hide");
    themeIconMoon.classList.toggle("hide");
  });
}
