// ========================================
// LOGIN SCREEN ANIMATION (Inside Loading Screen)
// Cyber-themed login simulation
// ========================================

window.addEventListener("DOMContentLoaded", function () {
  const loginSection = document.getElementById("login-section");
  const hackerSection = document.getElementById("hacker-loading-section");
  const usernameEl = document.getElementById("login-username");
  const passwordField = document.getElementById("password-field");
  const passwordEl = document.getElementById("login-password");
  const statusEl = document.getElementById("login-status");

  // Login credentials from config
  const username = LOGIN_CONFIG.username;
  const password = LOGIN_CONFIG.password;

  let usernameIndex = 0;
  let passwordIndex = 0;

  // Start login animation
  setTimeout(startLogin, LOGIN_CONFIG.initialDelay);

  function startLogin() {
    statusEl.textContent = LOGIN_CONFIG.messages.connecting;
    setTimeout(typeUsername, LOGIN_CONFIG.startDelay);
  }

  // Type username character by character
  function typeUsername() {
    if (usernameIndex < username.length) {
      usernameEl.textContent += username[usernameIndex];
      usernameIndex++;
      setTimeout(typeUsername, LOGIN_CONFIG.usernameTypingSpeed + Math.random() * 40);
    } else {
      // Username complete, move to password
      setTimeout(() => {
        statusEl.textContent = LOGIN_CONFIG.messages.usernameAccepted;
        passwordField.style.display = "block";
        setTimeout(typePassword, LOGIN_CONFIG.passwordStartDelay);
      }, LOGIN_CONFIG.usernameCompleteDelay);
    }
  }

  // Type password character by character
  function typePassword() {
    if (passwordIndex < password.length) {
      passwordEl.textContent += password[passwordIndex];
      passwordIndex++;
      setTimeout(typePassword, LOGIN_CONFIG.passwordTypingSpeed + Math.random() * 30);
    } else {
      // Password complete, authenticate
      setTimeout(authenticate, LOGIN_CONFIG.passwordCompleteDelay);
    }
  }

  // Authenticate user
  function authenticate() {
    statusEl.textContent = LOGIN_CONFIG.messages.authenticating;
    statusEl.classList.add("success");

    // Get authentication steps from config
    const authSteps = LOGIN_CONFIG.authenticationSteps;
    let stepIndex = 0;

    function showNextStep() {
      if (stepIndex < authSteps.length) {
        statusEl.textContent = authSteps[stepIndex];
        
        if (stepIndex === authSteps.length - 1) {
          statusEl.classList.add("success");
          // Last step, proceed to loading screen
          setTimeout(proceedToLoading, LOGIN_CONFIG.finalDelay);
        } else {
          stepIndex++;
          setTimeout(showNextStep, LOGIN_CONFIG.authStepDelay);
        }
      }
    }

    setTimeout(showNextStep, LOGIN_CONFIG.authStartDelay);
  }

  // Proceed to system penetration phase
  function proceedToLoading() {
    // Hide login section with fade effect
    loginSection.style.opacity = "0";
    loginSection.style.transform = "scale(0.9)";
    loginSection.style.transition = `all ${LOGIN_CONFIG.transitionDelay}ms ease`;
    
    setTimeout(() => {
      loginSection.style.display = "none";
      hackerSection.style.display = "block";
      
      // Start system penetration animation
      if (typeof window.startHackerLoadingScreen === "function") {
        setTimeout(() => {
          window.startHackerLoadingScreen();
        }, LOGIN_CONFIG.hackerStartDelay);
      }
    }, LOGIN_CONFIG.transitionDelay);
  }
});

