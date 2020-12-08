const musicContainer = document.getElementById("music-container");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song Titles
const songs = [
  "1 Chasing Twisters Intro",
  "2 Chasing Twisters",
  "3 Holding On To Good",
  "4 Out Of The Badlands",
  "5 Whatcha Thinkin Bout",
  "6 Because The Night",
  "7 Dead End Road (feat. Liz Longley)",
  "8 Surrounded",
  "9 Hands Dirty",
  "10 If I Loved You",
  "11 Chandelier",
  "12 No Dry Eye In The Chapel",
  "13 Morning Comes",
  "14 Bottom Of The River",
  "01 Burning In Carolina",
  "02 Take Me There",
  "03 Any Better Than This",
  "04 Stronger Than A Lion",
  "05 No One Will Miss Me",
  "06 Back To The Garden",
  "07 Only In America",
  "08 From One Woman To Another",
  "09 If I'd Known I Loved Her",
  "10 Danced Right Out Of My Arms",
  "11 Soft Place To Land",
  "12 The Wrong Ocean",
  "01 Anthem",
  "02 Run",
  "03 Outlaws",
  "04 The Dream",
  "05 Scared",
  "06 Chasing Twisters",
  "07 Bethlehem Steel",
  "08 You're the One For Me",
  "09 Cold Day In Heaven",
  "10 I Will Never Die",
  "11 The Meaning Of It All",
  "12 My Whole Life Long",
  "13 After It All",
];

// Album Covers
const albumCovers = ["thefirstdecade", "thelight"];

// random starting song number
const randomNumber = Math.floor(Math.random() * songs.length) + 1;
console.log(randomNumber);

// Keep track of song
let songIndex = randomNumber;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  let albumCover = "";
    console.log(song);
  audio.src = `music/${song}.mp3`;
  if (
    song == "01 Burning In Carolina" ||
    song == "02 Take Me There" ||
    song == "03 Any Better Than This" ||
    song == "04 Stronger Than A Lion" ||
    song == "05 No One Will Miss Me" ||
    song == "06 Back To The Garden" ||
    song == "07 Only In America" ||
    song == "08 From One Woman To Another" ||
    song == "09 If I'd Known I Loved Her" ||
    song == "10 Danced Right Out Of My Arms" ||
    song == "11 Soft Place To Land" ||
    song == "12 The Wrong Ocean"
  ) {
    albumCover = "thelight";
  } else if (
    song == "01 Anthem" ||
    song == "02 Run" ||
    song == "03 Outlaws" ||
    song == "04 The Dream" ||
    song == "05 Scared" ||
    song == "06 Chasing Twisters" ||
    song == "07 Bethlehem Steel" ||
    song == "08 You're the One For Me" ||
    song == "09 Cold Day In Heaven" ||
    song == "10 I Will Never Die" ||
    song == "11 The Meaning Of It All" ||
    song == "12 My Whole Life Long" ||
    song == "13 After It All" 

  ) {
    albumCover = "afteritall";
  } else {
    albumCover = "thefirstdecade";
  }
  //   console.log(albumCover);
  cover.src = `images/${albumCover}.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/song update
audio.addEventListener("timeupdate", updateProgress);

// Click on progress bar
progressContainer.addEventListener("click", setProgress);

// Song Ends
audio.addEventListener("ended", nextSong);
