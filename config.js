// ========================================
// PORTFOLYO AYARLARI VE SABİTLER
// Bu dosyayı düzenleyerek içeriği kolayca değiştirebilirsiniz
// ========================================

// ============ KİŞİSEL BİLGİLER ============
const PERSONAL_INFO = {
  name: "ÇAĞRI ÖZAY",
  title: "Elite Portfolio",
  avatar: "👨‍💻",
  email: "dev@cybermail.com",
  linkedin: "#",
  github: "#",
  twitter: "#",
};

// ============ TYPING ANİMASYONU METİNLERİ ============
const TYPING_PHRASES = [
  "Bilgisayar Mühendisi",
  "Full Stack Developer",
  "AI/ML",
  "Bulut Mimarisi",
];

// ============ İSTATİSTİKLER ============
const STATS = [
  { value: 5, label: "Projeler" },
  { value: 50, label: "Commits" },
  { value: 4, label: "Sertifikalar" },
  { value: 1000, label: "Kod Saatleri" },
];

// ============ HAKKIMDA BİLGİLERİ ============
const ABOUT_TEXT = [
    "$ Merhaba! Ben dijital dünyada fark yaratan, yenilikçi çözümler üreten bir bilgisayar mühendisiyim.",
    "$ Modern teknolojileri kullanarak kompleks problemleri çözmeye ve kullanıcı odaklı deneyimler yaratmaya tutkuluyum.",
    "$ Full-stack development, AI/ML ve bulut mimarisi alanlarında tecrübeye sahibim.",
    "$ Teknoloji sürekli değişiyor; ben de sürekli öğrenmeyi ve bu değişime ayak uydurmayı ilke edindim.",
];

// ============ DENEYİMLER ============
const EXPERIENCES = [
  {
    date: "2024 - 2025",
    company: "Talipsan Mağazacılık a.ş.",
    role: "Junior Software Engineer",
    description:
      "Frontend ve backend geliştirme, API tasarımı ve veritabanı optimizasyonu.",
  },
];

// ============ SERTİFİKALAR VE BAŞARILAR ============
const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
  },
  {
    icon: "🎯",
    title: "Google Cloud Professional",
    organization: "Google Cloud",
  },
];

// ============ YETENEKLER ============
const SKILLS = {
  column1: [
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "React / Next.js", level: 85 },
    { name: "Python / Django", level: 80 },
    { name: "Node.js / Express", level: 85 },
  ],
  column2: [
    { name: "Supabase", level: 100 },
    { name: "PostgreSQL", level: 100 },
    { name: "Redis", level: 100 },
    { name: "Docker", level: 100 },
  ],
};

// ============ PROJELER ============
const PROJECTS = {
  "NeuroNet AI": {
    title: "NeuroNet AI",
    icon: "🤖",
    description:
      "Yapay zeka destekli veri analizi platformu. Makine öğrenmesi algoritmaları ile gerçek zamanlı tahmin ve optimizasyon yapan gelişmiş bir sistem. Büyük veri setlerini işleyerek anlamlı içgörüler elde eder.",
    shortDesc:
      "Yapay zeka destekli veri analizi platformu. Makine öğrenmesi algoritmaları ile gerçek zamanlı tahmin ve optimizasyon.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    features: [
      "Otomatik makine öğrenmesi model seçimi",
      "Gerçek zamanlı veri işleme ve analiz",
      "Interactive veri görselleştirme dashboard",
      "RESTful API ile kolay entegrasyon",
      "Scalable microservices mimarisi",
    ],
  },
};

// ============ BLOG YAZILARI ============
const BLOG_POSTS = [
  {
    date: "15 Ekim 2024",
    title: "Mikroservis Mimarisinde API Gateway Tasarımı",
    excerpt:
      "Modern uygulamalarda API Gateway'lerin rolü ve en iyi uygulama pratikleri üzerine kapsamlı bir rehber...",
  },
  {
    date: "10 Ekim 2024",
    title: "Kubernetes ile Otomatik Ölçeklendirme",
    excerpt:
      "HPA ve VPA kullanarak Kubernetes cluster'larınızı optimize etme teknikleri ve gerçek dünya senaryoları...",
  },
  {
    date: "5 Ekim 2024",
    title: "WebAssembly: Web'in Geleceği",
    excerpt:
      "WebAssembly'nin performans avantajları ve modern web uygulamalarında kullanım alanları...",
  },
];

// ============ REFERANSLAR ============
const TESTIMONIALS = [
];


// ============ HACKER TERMINAL MESAJLARI ============
const HACKER_MESSAGES = [
  "Initializing system access...",
  "Connecting to mainframe...",
  "Bypassing firewall...",
  "Decrypting security protocols...",
  "Accessing database...",
  "Extracting data streams...",
  "Compiling information...",
  "System access granted!",
  "Welcome to the matrix...",
];

// ============ HACKER LOADING EKRANI MESAJLARI ============
const HACKER_LOADING_MESSAGES = [
  {
    text: "Initializing network protocols...",
    type: "info",
    delay: 60,
  },
  {
    text: "Scanning target system architecture...",
    type: "info",
    delay: 90,
  },
  {
    text: "Bypassing firewall layer 1...",
    type: "warning",
    delay: 120,
  },
  { text: "Firewall layer 1 BYPASSED ✓", type: "success", delay: 60 },
  {
    text: "Injecting payload into port 8080...",
    type: "warning",
    delay: 120,
  },
  { text: "Payload injection SUCCESS ✓", type: "success", delay: 60 },
  {
    text: "Decrypting security protocols...",
    type: "info",
    delay: 150,
  },
  {
    text: "AES-256 encryption detected...",
    type: "warning",
    delay: 90,
  },
  {
    text: "Brute forcing encryption keys...",
    type: "warning",
    delay: 180,
  },
  { text: "Key decryption SUCCESS ✓", type: "success", delay: 60 },
  { text: "Accessing main database...", type: "info", delay: 120 },
  { text: "Database access GRANTED ✓", type: "success", delay: 60 },
  { text: "Extracting system files...", type: "info", delay: 90 },
  {
    text: "Compiling user credentials...",
    type: "warning",
    delay: 120,
  },
  {
    text: "Administrator privileges obtained ✓",
    type: "success",
    delay: 60,
  },
  {
    text: "Disabling security cameras...",
    type: "warning",
    delay: 90,
  },
  { text: "Security systems DISABLED ✓", type: "success", delay: 60 },
  { text: "Clearing access logs...", type: "info", delay: 90 },
  { text: "Logs CLEARED ✓", type: "success", delay: 60 },
  {
    text: "Finalizing system penetration...",
    type: "info",
    delay: 120,
  },
  {
    text: "SYSTEM PENETRATION COMPLETE ✓",
    type: "success",
    delay: 60,
  },
];

// ============ TEMA RENKLERİ ============
const THEMES = {
  cyan: { primary: "#00ffff", secondary: "#ff00ff", tertiary: "#bd00ff" },
  pink: { primary: "#ff00ff", secondary: "#ff0080", tertiary: "#ff1493" },
  green: { primary: "#00ff00", secondary: "#00ff80", tertiary: "#32cd32" },
  orange: { primary: "#ff6600", secondary: "#ffaa00", tertiary: "#ff8c00" },
};

// ============ MATRIX RAIN AYARLARI ============
const MATRIX_CONFIG = {
  chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()",
  fontSize: 14,
  fadeSpeed: 0.05,
  dropSpeed: 33, // milliseconds
};

// ============ EMAİLJS AYARLARI ============
// ÖNEMLI: Bu değerleri kendi EmailJS hesabınızdan alın!
// Kayıt: https://www.emailjs.com/
const EMAILJS_CONFIG = {
  publicKey: "YOUR_PUBLIC_KEY", // EmailJS Public Key
  serviceId: "YOUR_SERVICE_ID", // EmailJS Service ID
  templateId: "YOUR_TEMPLATE_ID", // EmailJS Template ID
};

// ============ GENEL AYARLAR ============
const GENERAL_CONFIG = {
  // Animasyon süreleri (ms)
  typingSpeed: 100,
  deletingSpeed: 50,
  typingDelay: 2000,

  // Testimonial slider
  testimonialAutoRotate: 5000, // 5 saniye

  // Stats animasyon süresi
  statsAnimationDuration: 2000,

  // Scroll'da back-to-top button'un göründüğü nokta
  backToTopThreshold: 300,

  // Music player
  defaultVolume: 0.5, // 50%

  // Contribution graph
  contributionDays: 364,
};

// ============ LOGIN EKRANI AYARLARI ============
const LOGIN_CONFIG = {
  // Credentials
  username: "admin",
  password: "********",
  
  // Typing speeds (ms per character)
  usernameTypingSpeed: 80,
  passwordTypingSpeed: 50,
  
  // Delays (ms)
  initialDelay: 100,           // İlk mesaj gösterilmeden önce
  startDelay: 400,             // Username yazmaya başlamadan önce
  usernameCompleteDelay: 300,  // Username tamamlandıktan sonra
  passwordStartDelay: 300,     // Password yazmaya başlamadan önce
  passwordCompleteDelay: 400,  // Password tamamlandıktan sonra
  authStepDelay: 300,          // Her authentication adımı arası
  authStartDelay: 300,         // Authentication başlamadan önce
  finalDelay: 500,            // Son mesajdan loading'e geçiş
  transitionDelay: 300,        // Fade out süresi
  hackerStartDelay: 200,       // Hacker screen başlama gecikmesi
  
  // Messages
  messages: {
    connecting: "> Connecting to secure server...",
    usernameAccepted: "> Username accepted. Enter password...",
    authenticating: "> Authenticating...",
  },
  
  // Authentication steps
  authenticationSteps: [
    "> Verifying credentials...",
    "> ✓ ACCESS GRANTED",
  ],
  
  // UI Text
  ui: {
    title: "SECURE ACCESS",
    icon: "🔐",
    usernameLabel: "USERNAME:",
    passwordLabel: "PASSWORD:",
    prompt: "root@cyber:~$",
    hint: "⚠️ AUTHORIZED ACCESS ONLY",
  },
};

// ========================================
// UTILITY FUNCTIONS
// Helper functions for configuration
// ========================================

/**
 * Get a specific project by title
 * @param {string} title - Project title
 * @returns {Object|null} Project object or null if not found
 */
function getProjectByTitle(title) {
  return PROJECTS[title] || null;
}

/**
 * Get all project titles
 * @returns {Array<string>} Array of project titles
 */
function getAllProjectTitles() {
  return Object.keys(PROJECTS);
}

/**
 * Get projects by technology tag
 * @param {string} tag - Technology tag to filter by
 * @returns {Array<Object>} Array of matching projects
 */
function getProjectsByTag(tag) {
  return Object.values(PROJECTS).filter((project) =>
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get total number of projects
 * @returns {number} Number of projects
 */
function getTotalProjects() {
  return Object.keys(PROJECTS).length;
}

/**
 * Validate EmailJS configuration
 * @returns {boolean} True if configuration is valid
 */
function isEmailJSConfigured() {
  return (
    EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY" &&
    EMAILJS_CONFIG.serviceId !== "YOUR_SERVICE_ID" &&
    EMAILJS_CONFIG.templateId !== "YOUR_TEMPLATE_ID"
  );
}

/**
 * Get a random testimonial
 * @returns {Object} Random testimonial object
 */
function getRandomTestimonial() {
  return TESTIMONIALS[Math.floor(Math.random() * TESTIMONIALS.length)];
}

/**
 * Get recent blog posts (sorted by date, most recent first)
 * @param {number} limit - Number of posts to return (default: all)
 * @returns {Array<Object>} Array of blog posts
 */
function getRecentBlogPosts(limit = BLOG_POSTS.length) {
  return BLOG_POSTS.slice(0, limit);
}

/**
 * Get achievements by category (based on icon/title keywords)
 * @param {string} keyword - Keyword to search for
 * @returns {Array<Object>} Array of matching achievements
 */
function getAchievementsByKeyword(keyword) {
  return ACHIEVEMENTS.filter(
    (achievement) =>
      achievement.title.toLowerCase().includes(keyword.toLowerCase()) ||
      achievement.organization.toLowerCase().includes(keyword.toLowerCase())
  );
}

/**
 * Get total skill level percentage
 * @returns {number} Average skill level
 */
function getAverageSkillLevel() {
  const allSkills = [...SKILLS.column1, ...SKILLS.column2];
  const total = allSkills.reduce((sum, skill) => sum + skill.level, 0);
  return Math.round(total / allSkills.length);
}

/**
 * Get highest skill
 * @returns {Object} Skill with highest level
 */
function getHighestSkill() {
  const allSkills = [...SKILLS.column1, ...SKILLS.column2];
  return allSkills.reduce((highest, skill) =>
    skill.level > highest.level ? skill : highest
  );
}

/**
 * Get total years of experience
 * @returns {number} Years calculated from earliest experience date
 */
function getTotalExperienceYears() {
  if (EXPERIENCES.length === 0) return 0;
  
  const dates = EXPERIENCES.map((exp) => {
    const match = exp.date.match(/\d{4}/);
    return match ? parseInt(match[0]) : new Date().getFullYear();
  });
  
  const earliestYear = Math.min(...dates);
  const currentYear = new Date().getFullYear();
  return currentYear - earliestYear;
}

/**
 * Validate all required configurations
 * @returns {Object} Validation results
 */
function validateConfig() {
  return {
    hasPersonalInfo: PERSONAL_INFO.name && PERSONAL_INFO.email,
    hasProjects: Object.keys(PROJECTS).length > 0,
    hasSkills: SKILLS.column1.length > 0 || SKILLS.column2.length > 0,
    hasExperiences: EXPERIENCES.length > 0,
    hasAchievements: ACHIEVEMENTS.length > 0,
    hasBlogPosts: BLOG_POSTS.length > 0,
    hasTestimonials: TESTIMONIALS.length > 0,
    emailConfigured: isEmailJSConfigured(),
  };
}
