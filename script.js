var audio = document.getElementById('audio');
var playPause = document.getElementById('play-pause');
var progressContainer = document.getElementById('progress-container');
var progress = document.getElementById('progress');

playPause.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPause.style.background = '#ED4956';
    } else {
        audio.pause();
        playPause.style.background = '#1DB954';
    }
});

audio.addEventListener('timeupdate', function() {
    var progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = progressPercent + '%';
});

progressContainer.addEventListener('click', function(e) {
    var clickPosition = e.pageX - progressContainer.offsetLeft;
    var progressWidth = window.getComputedStyle(progressContainer).getPropertyValue('width');
    var clickPercent = clickPosition / parseInt(progressWidth) * 100;

    audio.currentTime = audio.duration * (clickPercent / 100);
});
