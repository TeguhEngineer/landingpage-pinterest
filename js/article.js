/**
 * Article Page Functions
 * Centralized JavaScript for all article pages
 */

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
});

// Reading Progress Bar
function initReadingProgress() {
  window.addEventListener('scroll', () => {
    const article = document.querySelector('article');
    if (!article) return;
    
    const scrollTop = window.pageYOffset;
    const articleHeight = article.offsetHeight;
    const articleTop = article.offsetTop;
    const viewportHeight = window.innerHeight;
    
    // Calculate how much of the article has been scrolled through
    // Progress reaches 100% when bottom of viewport reaches bottom of article
    const scrollProgress = ((scrollTop + viewportHeight - articleTop) / articleHeight) * 100;
    const progressBar = document.getElementById('reading-progress');
    
    if (progressBar) {
      progressBar.style.width = Math.min(Math.max(scrollProgress, 0), 100) + '%';
    }
  });
}

// Social Share Functions
function shareToWhatsApp() {
  const text = document.title;
  const url = window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
}

function pinToPinterest() {
  const url = window.location.href;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const description = descriptionMeta ? descriptionMeta.content : document.title;
  const firstImage = document.querySelector('article img');
  const image = firstImage ? firstImage.src : '';
  
  window.open(
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}`,
    '_blank',
    'width=750,height=550'
  );
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showCopyTooltip();
  });
}

function showCopyTooltip() {
  // Create tooltip if doesn't exist
  let tooltip = document.getElementById('copy-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'copy-tooltip';
    tooltip.innerHTML = '✓ Link Tersalin!';
    document.body.appendChild(tooltip);
  }
  
  // Show tooltip
  tooltip.classList.add('show');
  
  // Hide after 2 seconds
  setTimeout(() => {
    tooltip.classList.remove('show');
  }, 2000);
}

// Pinterest Pin Button on Images
function initPinterestPinButtons() {
  document.querySelectorAll('article img').forEach(img => {
    const container = document.createElement('div');
    container.className = 'article-image-container';
    img.parentNode.insertBefore(container, img);
    container.appendChild(img);
    
    const pinBtn = document.createElement('button');
    pinBtn.className = 'pinterest-pin-btn';
    pinBtn.innerHTML = '📌 Pin';
    pinBtn.onclick = (e) => {
      e.preventDefault();
      const imgUrl = img.src;
      const description = img.alt || document.title;
      window.open(
        `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(imgUrl)}&description=${encodeURIComponent(description)}`,
        '_blank',
        'width=750,height=550'
      );
    };
    container.appendChild(pinBtn);
  });
}

// Initialize all article features
function initArticle(config = {}) {
  // Config can include article-specific data if needed
  // For example: { id: 'fall-nails-2025', category: 'Nail Art' }
  
  initReadingProgress();
  initPinterestPinButtons();
  
  // Log initialization (optional, can be removed in production)
  if (config.id) {
    console.log(`Article initialized: ${config.id}`);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initArticle());
} else {
  // DOM already loaded
  initArticle();
}
