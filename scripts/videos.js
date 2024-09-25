// Cambiar video al hacer clic en la lista
function changeVideo(videoId) {
    const youtubePlayer = document.getElementById('youtubePlayer');
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}`;
}

// Control personalizado de reproducción
function togglePlay() {
    const videoPlayer = document.getElementById('mainVideo');
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

// Adelantar o retroceder
function forward() {
    const videoPlayer = document.getElementById('mainVideo');
    videoPlayer.currentTime += 10; // Adelanta 10 segundos
}

function backward() {
    const videoPlayer = document.getElementById('mainVideo');
    videoPlayer.currentTime -= 10; // Retrocede 10 segundos
}
