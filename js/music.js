// ========================================
// MUSIC PLAYER
// Background music controls
// ========================================

const audioElement = document.getElementById("background-music");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const volumeControl = document.getElementById("volume-control");
const musicStatus = document.querySelector(".music-status");

// Set initial volume
audioElement.volume = GENERAL_CONFIG.defaultVolume;

// Check if audio can be loaded
audioElement.addEventListener("loadeddata", function () {
  if (musicStatus) {
    musicStatus.textContent = "✓ Ready";
    musicStatus.style.display = "block";
  }
});

audioElement.addEventListener("error", function (e) {
  if (musicStatus) {
    musicStatus.textContent = "⚠️ Use HTTP Server";
    musicStatus.style.display = "block";
    musicStatus.style.color = "var(--neon-orange)";
  }
  alert(
    "⚠️ Müzik dosyası yüklenemedi!\n\nÇözüm: Dosyayı bir HTTP server ile açın:\n• VSCode Live Server kullanın\n• veya Terminal'de: python3 -m http.server 8000"
  );
});

// Music Toggle Button
document.getElementById("music-toggle").addEventListener("click", function () {
  const player = document.getElementById("music-player");
  if (player.style.display === "none") {
    player.style.display = "block";
    this.classList.add("active");
  } else {
    player.style.display = "none";
    this.classList.remove("active");
    // Pause music when closing player
    if (!audioElement.paused) {
      audioElement.pause();
    }
  }
});

// Play Music
function playMusic() {
  audioElement
    .play()
    .then(() => {
      playBtn.style.opacity = "0.5";
      pauseBtn.style.opacity = "1";
      if (musicStatus) {
        musicStatus.textContent = "♪ Playing...";
        musicStatus.style.display = "block";
        musicStatus.style.color = "var(--neon-green)";
      }
    })
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        alert(
          "⚠️ Müzik dosyası yüklenemedi!\n\nDosyayı bir HTTP server ile açın:\n• VSCode'da Live Server extension kullanın\n• Terminal: python3 -m http.server 8000\n• veya: npx serve"
        );
      } else {
        alert("❌ Müzik çalınamadı: " + error.message);
      }
    });
}

// Pause Music
function pauseMusic() {
  audioElement.pause();
  playBtn.style.opacity = "1";
  pauseBtn.style.opacity = "0.5";
  if (musicStatus) {
    musicStatus.textContent = "❚❚ Paused";
    musicStatus.style.color = "var(--neon-orange)";
  }
}

// Stop Music
function stopMusic() {
  audioElement.pause();
  audioElement.currentTime = 0;
  playBtn.style.opacity = "1";
  pauseBtn.style.opacity = "0.5";
  if (musicStatus) {
    musicStatus.textContent = "■ Stopped";
    musicStatus.style.color = "var(--neon-cyan)";
  }
}

// Change Volume
function changeVolume(value) {
  audioElement.volume = value / 100;
}

// Make functions global for onclick handlers
window.playMusic = playMusic;
window.pauseMusic = pauseMusic;
window.stopMusic = stopMusic;
window.changeVolume = changeVolume;

// Auto play on first user interaction (optional)
let hasInteracted = false;
document.addEventListener(
  "click",
  function autoPlayOnce() {
    if (!hasInteracted) {
      hasInteracted = true;
      audioElement.load();
    }
  },
  { once: true }
);

