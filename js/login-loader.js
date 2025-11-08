// ========================================
// LOGIN UI LOADER
// Dynamically loads login UI from config
// ========================================

// Load login UI as soon as DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadLoginUI);
} else {
  loadLoginUI();
}

function loadLoginUI() {
  const loginSection = document.getElementById("login-section");
  
  if (!loginSection) return;
  
  // Build login UI from config
  loginSection.innerHTML = `
    <div class="login-logo">
      <span class="login-icon">${LOGIN_CONFIG.ui.icon}</span>
      <h1 class="login-title">${LOGIN_CONFIG.ui.title}</h1>
    </div>
    
    <div class="login-form">
      <div class="login-field">
        <label class="login-label">
          <span class="login-prompt">${LOGIN_CONFIG.ui.prompt}</span> ${LOGIN_CONFIG.ui.usernameLabel}
        </label>
        <div class="login-input-wrapper">
          <span class="login-input" id="login-username"></span>
          <span class="login-cursor">_</span>
        </div>
      </div>
      
      <div class="login-field" id="password-field" style="display: none;">
        <label class="login-label">
          <span class="login-prompt">${LOGIN_CONFIG.ui.prompt}</span> ${LOGIN_CONFIG.ui.passwordLabel}
        </label>
        <div class="login-input-wrapper">
          <span class="login-input" id="login-password"></span>
          <span class="login-cursor">_</span>
        </div>
      </div>
      
      <div class="login-status" id="login-status"></div>
    </div>
    
    <div class="login-footer">
      <span class="login-hint">${LOGIN_CONFIG.ui.hint}</span>
    </div>
  `;
}

