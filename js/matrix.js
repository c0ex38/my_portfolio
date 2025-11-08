// ========================================
// MATRIX RAIN EFFECT
// Canvas-based matrix rain animation
// ========================================

const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = MATRIX_CONFIG.chars;
const charArray = chars.split("");
const fontSize = MATRIX_CONFIG.fontSize;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

let matrixInterval;

function drawMatrix() {
  ctx.fillStyle = `rgba(10, 10, 15, ${MATRIX_CONFIG.fadeSpeed})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = charArray[Math.floor(Math.random() * charArray.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Matrix Toggle Button
document.getElementById("matrix-toggle").addEventListener("click", function () {
  const canvas = document.getElementById("matrix-canvas");
  if (canvas.classList.contains("active")) {
    canvas.classList.remove("active");
    clearInterval(matrixInterval);
    this.classList.remove("active");
  } else {
    canvas.classList.add("active");
    matrixInterval = setInterval(drawMatrix, MATRIX_CONFIG.dropSpeed);
    this.classList.add("active");
  }
});

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

