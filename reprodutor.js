const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const volumeSlider = document.getElementById("volumeSlider");

const songs = [
    { title: "Freddie Dredd - Limbo", source: "Freddie Dredd - Limbo.mp3", image: "limbo.jpg" },
    { title: "Mina do Condomínio", source: "Mina do Condomínio.mp3", image: "mina de condominio.jfif" },
        { title: "Rollin'", source: "Rollin'.mp3", image: "Rollin.jpg" },
    { title: "Ice Cube - It Was A Good Day", source: "Ice Cube - It Was A Good Day.mp3", image: "it was a good day.jpg" },
        { title: "INTERWORLD - METAMORPHOSIS (1)", source: "INTERWORLD - METAMORPHOSIS (1).mp3", image: "metamorphosis.jfif" },
    { title: "Lord Lorenz - MurderCaust", source: "Lord Lorenz - MurderCaust.mp3", image: "murdercaust.jfif" },
        { title: "Godzilla (feat. Juice WRLD)", source: "Godzilla (feat. Juice WRLD).mp3", image: "godzilla.jpg" },
    { title: "Tokyo Drift", source: "Tokyo Drift.mp3", image: "tokyo drift.jpg" },
        { title: "Freddie Dredd - Devil's Work", source: "Freddie Dredd - Devil's Work.mp3", image: "devils work.jfif" },
    { title: "SICKO MODE", source: "SICKO MODE.mp3", image: "sicko mode.jpg" },

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


    const audioPlayer = document.querySelector(".audio-player h2");
    audioPlayer.style.backgroundImage = `url(${song.image})`;


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

loadSong(0);
