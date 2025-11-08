// ========================================
// UI INTERACTIONS
// Modal, Theme Selector, etc.
// ========================================

// ============ THEME SELECTOR ============
document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const theme = this.getAttribute("data-theme");
    const colors = THEMES[theme];
    document.documentElement.style.setProperty("--neon-cyan", colors.primary);
    document.documentElement.style.setProperty("--neon-pink", colors.secondary);
    document.documentElement.style.setProperty("--neon-purple", colors.tertiary);
  });
});

// ============ HACKER TERMINAL SIMULATOR ============
let hackerIndex = 0;
let hackerInterval;

const terminalToggle = document.getElementById("terminal-toggle");
if (terminalToggle) {
  terminalToggle.addEventListener("click", function () {
  const hackerSection = document.getElementById("hacker-terminal-section");
  const terminal = document.getElementById("hacker-terminal");

  if (hackerSection.style.display === "none") {
    hackerSection.style.display = "block";
    this.classList.add("active");
    terminal.innerHTML = "";
    hackerIndex = 0;

    hackerInterval = setInterval(() => {
      if (hackerIndex < HACKER_MESSAGES.length) {
        const line = document.createElement("div");
        line.className = "hacker-line";
        line.textContent = "> " + HACKER_MESSAGES[hackerIndex];
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
        hackerIndex++;
      } else {
        clearInterval(hackerInterval);
      }
    }, 500);
  } else {
    hackerSection.style.display = "none";
    this.classList.remove("active");
    clearInterval(hackerInterval);
  }
  });
}

// ============ TESTIMONIAL SLIDER ============
let currentTestimonial = 0;

function changeTestimonial(direction) {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial += direction;

  if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
  if (currentTestimonial >= testimonials.length) currentTestimonial = 0;

  testimonials[currentTestimonial].classList.add("active");
}

// Make function global for onclick handlers
window.changeTestimonial = changeTestimonial;

// Auto-rotate testimonials (only if testimonials exist)
if (document.querySelectorAll(".testimonial").length > 0) {
  setInterval(() => changeTestimonial(1), GENERAL_CONFIG.testimonialAutoRotate);
}

// ============ PROJECT MODAL ============
function openProjectModal(projectName) {
  const modal = document.getElementById("project-modal");
  const data = PROJECTS[projectName];

  if (data) {
    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-image").textContent = data.icon;
    document.getElementById("modal-description").textContent = data.description;

    // Update tags
    const tagsContainer = document.getElementById("modal-tags");
    tagsContainer.innerHTML = data.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    // Update features
    const featuresContainer = document.getElementById("modal-features");
    featuresContainer.innerHTML = data.features
      .map((feature) => `<li>${feature}</li>`)
      .join("");

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Make functions global
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

// Add click events to project cards
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", function () {
        const projectTitle = this.querySelector(".project-title").textContent;
        openProjectModal(projectTitle);
      });
    });
  }, 100);
});

// Close modal on outside click
document.getElementById("project-modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeProjectModal();
  }
});

// ============ CONTACT FORM (EmailJS) ============
const contactForm = document.getElementById("contact-form");
if (contactForm && typeof emailjs !== "undefined") {
  emailjs.init(EMAILJS_CONFIG.publicKey);
  
  contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Gönderiliyor...";
  submitBtn.disabled = true;

  const templateParams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
    .then(
      function (response) {
        alert("✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.");
        contactForm.reset();
      },
      function (error) {
        alert("✅ Mesajınız alındı! En kısa sürede size dönüş yapacağım.");
        contactForm.reset();
      }
    )
    .finally(function () {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
  });
}

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

