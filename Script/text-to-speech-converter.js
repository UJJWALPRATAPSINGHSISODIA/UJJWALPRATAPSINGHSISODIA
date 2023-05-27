let text_speech_text = document.getElementById("text-speech-txt");

let text_speech_submitBtn = document.getElementById("text-speech-submit");
let text_speech_resumeBtn = document.getElementById("text-speech-resume");
let text_speech_pauseBtn = document.getElementById("text-speech-pause");
let text_speech_audioMessage;

text_speech_submitBtn.addEventListener("click", () => {
  //set the text
  text_speech_audioMessage.text = text_speech_text.value;
  //speak the text
  window.speechSynthesis.speak(text_speech_audioMessage);
});

text_speech_resumeBtn.addEventListener("click", () => {
  text_speech_pauseBtn.style.display = "block";
  text_speech_resumeBtn.style.display = "none";
  //resume the audio if it is paused
  if (speechSynthesis.pause) {
    speechSynthesis.resume();
  }
});

text_speech_pauseBtn.addEventListener("click", () => {
  text_speech_pauseBtn.style.display = "none";
  text_speech_resumeBtn.style.display = "block";
  //pause if speaking
  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});

window.onload = () => {
  text_speech_resumeBtn.style.display = "none";
  if ("speechSynthesis" in window) {
    text_speech_audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthese is not supported");
  }
};
