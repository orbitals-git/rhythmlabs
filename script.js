// Get the audio element
const audio = document.getElementById("audio");

// Get the play and pause buttons
const play = document.getElementById("play");
const pause = document.getElementById("pause");

// Add event listeners to the buttons
play.addEventListener("click", function() {
   // Play the audio
   audio.play();
});

pause.addEventListener("click", function() {
   // Pause the audio
   audio.pause();
});
