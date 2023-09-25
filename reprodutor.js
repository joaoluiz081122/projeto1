const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const volumeSlider = document.getElementById("volumeSlider");

const songs = [
    { title: "Música 1", source: "song1.mp3", image: "song1.jpg" },
    { title: "Música 2", source: "song2.mp3", image: "song2.jpg" },
    // Adicione mais músicas aqui
];

let currentSongIndex = -1;

function loadSong(index) {
    if (index < 0 || index >= songs.length) {
        return;
    }

    currentSongIndex = index;
    const song = songs[index];

    audio.src = song.source;
    audio.load();

    // Atualize a imagem do reprodutor
    const audioPlayer = document.querySelector(".audio-player h2");
    audioPlayer.style.backgroundImage = `url(${song.image})`;

    // Atualize a lista de reprodução para indicar qual música está tocando
    const playlistItems = document.querySelectorAll("#playlist li");
    playlistItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add("selected");
        } else {
            item.classList.remove("selected");
        }
    });
}

function playSong() {
    audio.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}

function pauseSong() {
    audio.pause();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
}

function prevSong() {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(newIndex);
    playSong();
}

function nextSong() {
    const newIndex = (currentSongIndex + 1) % songs.length;
    loadSong(newIndex);
    playSong();
}

function updateVolume() {
    audio.volume = volumeSlider.value;
}

audio.addEventListener("ended", nextSong);
playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
volumeSlider.addEventListener("input", updateVolume);

// Carregue a primeira música por padrão
loadSong(0);
