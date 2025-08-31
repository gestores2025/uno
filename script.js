// Variables
const audioPlayer = document.getElementById("audioPlayer");
const playlist = document.getElementById("playlist");
const playPauseButton = document.getElementById("playPause");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Lista de canciones
const songs = [
    "musica/cancion1.mp3",
    "musica/cancion2.mp3",
    "musica/cancion3.mp3",
    "musica/cancion4.mp3",
    "musica/ESPIRITU SANTO.mp3",
    "musica/GOSTH.mp3",
    "musica/Titanic - My Heart Will Go On (Music Video)(MP3_128K).mp3",
    "musica/cancion8.mp3",
    "musica/cancion9.mp3",
    "musica/cancion10.mp3"
];

// Variables de control
let currentSongIndex = 0;
let isPlaying = false;

// Función para cargar y reproducir una canción
function loadSong(index) {
    audioPlayer.src = songs[index];
    audioPlayer.play();
    isPlaying = true;
    updatePlaylist();
}

// Actualiza la clase activa en la lista de canciones
function updatePlaylist() {
    const items = playlist.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        if (i === currentSongIndex) {
            items[i].classList.add("active");
        } else {
            items[i].classList.remove("active");
        }
    }
}

// Control de play/pause
playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
});

// Navegar a la siguiente canción
nextButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Navegar a la canción anterior
prevButton.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Cargar canción cuando se selecciona de la lista
playlist.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "LI") {
        currentSongIndex = parseInt(e.target.getAttribute("data-index"));
        loadSong(currentSongIndex);
    }
});

// Cargar la primera canción al inicio
loadSong(currentSongIndex);
