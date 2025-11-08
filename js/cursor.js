// ========================================
// CUSTOM CYBER CURSOR
// Custom cursor with trail effect
// ========================================

const customCursor = document.getElementById("custom-cursor");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Track mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Create trail effect
  createCursorTrail(e.clientX, e.clientY);
});

// Smooth cursor movement
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;

  customCursor.style.left = cursorX + "px";
  customCursor.style.top = cursorY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Create cursor trail
function createCursorTrail(x, y) {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = x + "px";
  trail.style.top = y + "px";
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
}

// Cursor hover effects
document
  .querySelectorAll(
    "a, button, .project-card, .achievement-card, .blog-card, input, textarea"
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      customCursor.classList.add("hover");
    });

    el.addEventListener("mouseleave", () => {
      customCursor.classList.remove("hover");
    });
  });

// Cursor click effect
document.addEventListener("mousedown", () => {
  customCursor.classList.add("active");
});

document.addEventListener("mouseup", () => {
  customCursor.classList.remove("active");
});

