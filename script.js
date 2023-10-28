const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");

// Add an event listener for when the audio track changes
audio.addEventListener("play", () => {
    songTitle.textContent = "Now Playing: Your Song Title";
});

audio.addEventListener("pause", () => {
    songTitle.textContent = "Paused: Your Song Title";
});

audio.addEventListener("ended", () => {
    songTitle.textContent = "Song Ended";
});

audio.addEventListener("timeupdate", () => {
    // Display the current time and duration in a futuristic way
    const currentTime = Math.floor(audio.currentTime);
    const duration = Math.floor(audio.duration);
    songTitle.textContent = `Now Playing: Your Song Title [${formatTime(currentTime)} / ${formatTime(duration)}]`;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
