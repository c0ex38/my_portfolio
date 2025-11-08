// ========================================
// DYNAMIC CONTENT LOADERS
// Load all content from config.js
// ========================================

// Load Stats from Config
function loadStats() {
  const statsGrid = document.getElementById("stats-grid");
  if (statsGrid) {
    STATS.forEach((stat) => {
      const statCard = document.createElement("div");
      statCard.className = "stat-card";
      statCard.innerHTML = `
        <div class="stat-number" data-target="${stat.value}">0</div>
        <div class="stat-label">${stat.label}</div>
      `;
      statsGrid.appendChild(statCard);
    });
  }
}

// Load About Text from Config
function loadAbout() {
  const aboutContent = document.getElementById("about-content");
  if (aboutContent) {
    ABOUT_TEXT.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      aboutContent.appendChild(p);
    });
    // Add status line
    const statusP = document.createElement("p");
    statusP.innerHTML =
      '$ status: <span style="color: var(--neon-cyan)">ONLINE</span><span class="cursor"></span>';
    aboutContent.appendChild(statusP);
  }
}

// Load Experiences from Config
function loadExperiences() {
  const experienceTimeline = document.getElementById("experience-timeline");
  if (experienceTimeline) {
    EXPERIENCES.forEach((exp) => {
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item";
      timelineItem.innerHTML = `
        <div class="timeline-date">${exp.date}</div>
        <div class="timeline-content">
          <h3 class="timeline-company">${exp.company}</h3>
          <h4 class="timeline-role">${exp.role}</h4>
          <p class="timeline-desc">${exp.description}</p>
        </div>
      `;
      experienceTimeline.appendChild(timelineItem);
    });
  }
}

// Load Achievements from Config
function loadAchievements() {
  const achievementsGrid = document.getElementById("achievements-grid");
  if (achievementsGrid) {
    ACHIEVEMENTS.forEach((achievement) => {
      const achievementCard = document.createElement("div");
      achievementCard.className = "achievement-card";
      achievementCard.innerHTML = `
        <div class="achievement-icon">${achievement.icon}</div>
        <h3 class="achievement-title">${achievement.title}</h3>
        <p class="achievement-org">${achievement.organization}</p>
      `;
      achievementsGrid.appendChild(achievementCard);
    });
  }
}

// Load Skills from Config
function loadSkills() {
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer) {
    const column1 = document.createElement("div");
    const column2 = document.createElement("div");

    SKILLS.column1.forEach((skill) => {
      const skillBar = document.createElement("div");
      skillBar.className = "skill-bar";
      skillBar.innerHTML = `
        <div class="skill-name">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="bar-container">
          <div class="bar-fill" style="width: ${skill.level}%"></div>
        </div>
      `;
      column1.appendChild(skillBar);
    });

    SKILLS.column2.forEach((skill) => {
      const skillBar = document.createElement("div");
      skillBar.className = "skill-bar";
      skillBar.innerHTML = `
        <div class="skill-name">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="bar-container">
          <div class="bar-fill" style="width: ${skill.level}%"></div>
        </div>
      `;
      column2.appendChild(skillBar);
    });

    skillsContainer.appendChild(column1);
    skillsContainer.appendChild(column2);
  }
}

// Load Projects from Config
function loadProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    Object.values(PROJECTS).forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";

      const tagsHTML = project.tags
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");

      projectCard.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
        <div class="tech-tags">${tagsHTML}</div>
      `;

      projectsGrid.appendChild(projectCard);
    });
  }
}

// Load Blog Posts from Config
function loadBlogPosts() {
  const blogGrid = document.getElementById("blog-grid");
  if (blogGrid) {
    BLOG_POSTS.forEach((post) => {
      const blogCard = document.createElement("div");
      blogCard.className = "blog-card";
      blogCard.innerHTML = `
        <div class="blog-date">${post.date}</div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
      `;
      blogGrid.appendChild(blogCard);
    });
  }
}

// Load Testimonials from Config
function loadTestimonials() {
  const testimonialSlider = document.getElementById("testimonial-slider");
  if (testimonialSlider) {
    const navButtons = testimonialSlider.querySelectorAll(".testimonial-nav");
    testimonialSlider.innerHTML = "";

    TESTIMONIALS.forEach((testimonial, index) => {
      const testimonialDiv = document.createElement("div");
      testimonialDiv.className =
        index === 0 ? "testimonial active" : "testimonial";
      testimonialDiv.innerHTML = `
        <p class="testimonial-text">${testimonial.text}</p>
        <h4 class="testimonial-author">${testimonial.author}</h4>
        <p class="testimonial-role">${testimonial.role}</p>
      `;
      testimonialSlider.appendChild(testimonialDiv);
    });

    // Re-add navigation buttons
    navButtons.forEach((btn) => testimonialSlider.appendChild(btn));
  }
}

// Load Contact Info from Config
function loadContactInfo() {
  const contactGrid = document.getElementById("contact-grid");
  if (contactGrid) {
    const contacts = [
      { icon: "📧", label: "E-Mail", link: `mailto:${PERSONAL_INFO.email}` },
      { icon: "💼", label: "LinkedIn", link: PERSONAL_INFO.linkedin },
      { icon: "🐙", label: "GitHub", link: PERSONAL_INFO.github },
      { icon: "🐦", label: "Twitter", link: PERSONAL_INFO.twitter },
    ];

    contacts.forEach((contact) => {
      const contactItem = document.createElement("div");
      contactItem.className = "contact-item";
      contactItem.innerHTML = `
        <div class="contact-icon">${contact.icon}</div>
        <a href="${contact.link}" class="contact-link">${contact.label}</a>
      `;
      contactGrid.appendChild(contactItem);
    });
  }
}

// Initialize all loaders
function initializeLoaders() {
  loadStats();
  loadAbout();
  loadExperiences();
  loadAchievements();
  loadSkills();
  loadProjects();
  loadBlogPosts();
  loadTestimonials();
  loadContactInfo();
}

// Run loaders on page load
initializeLoaders();

