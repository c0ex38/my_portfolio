// ========================================
// ANIMATIONS AND EFFECTS
// Stats animation, typing, parallax, etc.
// ========================================

// ============ CONTRIBUTION GRAPH ============
const contributionGrid = document.getElementById("contribution-grid");
if (contributionGrid) {
  for (let i = 0; i < GENERAL_CONFIG.contributionDays; i++) {
    const cell = document.createElement("div");
    cell.className = "graph-cell";
    const level = Math.floor(Math.random() * 5);
    if (level > 0) cell.classList.add("level-" + level);
    contributionGrid.appendChild(cell);
  }
}

// ============ STATS ANIMATION ============
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-target"));
    const duration = GENERAL_CONFIG.statsAnimationDuration;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        stat.textContent = target + "+";
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// Start stats animation when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateStats();
      observer.unobserve(entry.target);
    }
  });
});

const statsSection = document.querySelector(".stats-grid");
if (statsSection) observer.observe(statsSection);

// ============ TYPING ANIMATION ============
const typingText = document.getElementById("typing-text");
if (typingText && TYPING_PHRASES && TYPING_PHRASES.length > 0) {
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const current = TYPING_PHRASES[phraseIndex];

    if (isDeleting) {
      typingText.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => {
        isDeleting = true;
      }, GENERAL_CONFIG.typingDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % TYPING_PHRASES.length;
    }

    const typingSpeed = isDeleting
      ? GENERAL_CONFIG.deletingSpeed
      : GENERAL_CONFIG.typingSpeed;
    setTimeout(typeWriter, typingSpeed);
  }

  setTimeout(typeWriter, 1000);
}

// ============ SCROLL PROGRESS BAR ============
const scrollProgress = document.getElementById("scroll-progress");
if (scrollProgress) {
  window.addEventListener("scroll", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / scrollable) * 100;
    scrollProgress.style.width = progress + "%";
  });
}

// ============ BACK TO TOP BUTTON ============
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > GENERAL_CONFIG.backToTopThreshold) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ============ RANDOM GLITCH EFFECT ============
setInterval(() => {
  const glitchElements = document.querySelectorAll(".glitch");
  glitchElements.forEach((el) => {
    if (Math.random() > 0.95) {
      el.style.animation = "none";
      setTimeout(() => {
        el.style.animation = "";
      }, 100);
    }
  });
}, 3000);

// ============ PARALLAX EFFECT ============
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const parallaxElements = document.querySelectorAll(".terminal");

  parallaxElements.forEach((el, index) => {
    const speed = (index + 1) * 0.05;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ============ HACKER LOADING SCREEN ============
// Note: This will be triggered by login.js after login animation
function startHackerLoadingScreen() {
  const hackerLines = document.getElementById("hacker-lines");
  const loadingBar = document.getElementById("loading-bar");
  const loadingPercentage = document.getElementById("loading-percentage");
  const accessStatus = document.getElementById("access-status");
  const loadingScreen = document.getElementById("loading-screen");
  const asciiLogo = document.getElementById("ascii-logo");
  const hackerLoadingSection = document.getElementById("hacker-loading-section");

  if (!hackerLines || !loadingBar || !loadingPercentage || !accessStatus) {
    return;
  }

  let currentMessageIndex = 0;
  let loadProgress = 0;

  // Add glitch effect to ASCII logo randomly
  if (asciiLogo) {
    setInterval(() => {
      if (Math.random() > 0.7 && loadingScreen && !loadingScreen.classList.contains("hidden")) {
        asciiLogo.classList.add("glitch-loading");
        setTimeout(() => {
          asciiLogo.classList.remove("glitch-loading");
        }, 300);
      }
    }, 1000);
  }

  // Display hacker messages sequentially
  function displayHackerMessage() {
    if (currentMessageIndex >= HACKER_LOADING_MESSAGES.length) {
      setTimeout(() => {
        accessStatus.textContent = "ACCESS GRANTED";
        accessStatus.classList.add("granted");

        setTimeout(() => {
          loadingScreen.classList.add("hidden");
        }, 1000);
      }, 500);
      return;
    }

    const message = HACKER_LOADING_MESSAGES[currentMessageIndex];
    const line = document.createElement("div");
    line.className = `hack-line ${message.type}`;
    line.textContent = message.text;
    hackerLines.appendChild(line);

    hackerLines.scrollTop = hackerLines.scrollHeight;

    loadProgress = Math.floor(
      ((currentMessageIndex + 1) / HACKER_LOADING_MESSAGES.length) * 100
    );
    loadingBar.style.width = loadProgress + "%";
    loadingPercentage.textContent = loadProgress + "%";

    if (loadProgress < 30) {
      accessStatus.textContent = "PENETRATING SYSTEM";
    } else if (loadProgress < 60) {
      accessStatus.textContent = "BYPASSING SECURITY";
    } else if (loadProgress < 90) {
      accessStatus.textContent = "EXTRACTING DATA";
    } else {
      accessStatus.textContent = "FINALIZING ACCESS";
    }

    currentMessageIndex++;
    setTimeout(displayHackerMessage, message.delay);
  }

  setTimeout(displayHackerMessage, 500);
}

// Export function to be called by login.js
window.startHackerLoadingScreen = startHackerLoadingScreen;

