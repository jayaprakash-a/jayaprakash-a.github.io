document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Modal logic
  const modal = document.getElementById('details-modal');
  const closeBtn = document.getElementById('modal-close');

  const formatMeta = (meta) => {
    if (meta && meta.includes('|')) {
      const parts = meta.split('|').map(p => p.trim());
      return `<span>${parts[0]}</span><span>${parts[1]}</span>`;
    }
    return `<span>${meta || ''}</span>`;
  };

  window.openModal = function(section, index) {
    const item = portfolioData[section][index];
    // Just show the details block, or fallback to description if no details are provided
    // Removed modal-title and modal-meta to "Just show the details block"
    document.getElementById('modal-title').style.display = 'none';
    document.getElementById('modal-meta').style.display = 'none';
    document.getElementById('modal-body').innerHTML = item.details || `<p>${item.description}</p>`;
    
    let tagsHtml = item.tags && item.tags.length > 0
      ? item.tags.map(t => `<span>${t}</span>`).join('')
      : '';
    document.getElementById('modal-tags').innerHTML = tagsHtml;

    modal.style.display = "block";
  };

  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Render Data from data.js
  if (typeof portfolioData !== 'undefined') {
    // 1. Hero
    document.getElementById('hero-title').innerText = portfolioData.hero.title;
    document.getElementById('hero-subtitle').innerText = portfolioData.hero.subtitle;

    // 3. Experience
    const expContainer = document.getElementById('experience-container');
    portfolioData.experience.forEach((item, index) => {
      let tagsHtml = item.tags && item.tags.length > 0
        ? `<div class="tech-tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>`
        : '';

      expContainer.innerHTML += `
        <div class="timeline-item" onclick="openModal('experience', ${index})">
          <div class="timeline-content">
            <h3>${item.title}</h3>
            <div class="timeline-meta">${formatMeta(item.meta)}</div>
            <p>${item.description}</p>
            ${tagsHtml}
          </div>
        </div>
      `;
    });

    // 4. Projects
    const projContainer = document.getElementById('projects-container');
    portfolioData.projects.forEach((item, index) => {
      let tagsHtml = item.tags && item.tags.length > 0
        ? `<div class="tech-tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>`
        : '';

      projContainer.innerHTML += `
        <div class="grid-card" onclick="openModal('projects', ${index})">
          <h3>${item.title}</h3>
          <div class="timeline-meta">${formatMeta(item.meta)}</div>
          <p>${item.description}</p>
          ${tagsHtml}
        </div>
      `;
    });

    // 5. Publications
    const pubContainer = document.getElementById('publications-container');
    portfolioData.publications.forEach((item, index) => {
      pubContainer.innerHTML += `
        <div class="publication-item" onclick="openModal('publications', ${index})">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <h3>${item.title}</h3>
            <span style="background: rgba(253,53,25,0.2); color: #FD3519; padding: 4px 10px; border-radius: 20px; font-weight: bold; font-size: 0.85rem; margin-left: 10px; white-space: nowrap; border: 1px solid rgba(253,53,25,0.4);">
              Citations: ${item.citations}
            </span>
          </div>
          <div class="timeline-meta">${formatMeta(item.meta)}</div>
          <p>${item.description}</p>
          <a href="${item.link}" target="_blank" class="pub-link" onclick="event.stopPropagation()">Read Paper</a>
        </div>
      `;
    });

    // 6. Achievements
    const achContainer = document.getElementById('achievements-container');
    if (portfolioData.achievements) {
      portfolioData.achievements.forEach((item, index) => {
        achContainer.innerHTML += `
          <div class="achievement-item">
            <div class="achievement-icon">🏆</div>
            <div class="achievement-content">
              <h3>${item.title}</h3>
              <div class="timeline-meta">${formatMeta(item.meta)}</div>
              <p>${item.description}</p>
            </div>
          </div>
        `;
      });
    }
  } else {
    console.error("portfolioData is not defined. Ensure data.js is loaded before script.js.");
  }
});
