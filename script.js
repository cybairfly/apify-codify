/**
 * Aeqio Website JavaScript
 * Interactive features and animations
 */

// Mobile navigation toggle
const initNavigation = () => {
  const toggle = document.querySelector('.navigation-toggle');
  const menu = document.querySelector('.navigation-menu');
  const links = document.querySelectorAll('.navigation-link');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggle.classList.remove('active');
      menu.classList.remove('active');
    }
  });
};

// Smooth scroll for anchor links
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const offset = 80; // Navigation height
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};

// ASCII spinner animation
const initSpinner = () => {
  const spinners = document.querySelectorAll('.spinner');
  const frames = ['|', '/', '-', '\\'];
  let currentFrame = 0;

  setInterval(() => {
    spinners.forEach(spinner => {
      spinner.textContent = frames[currentFrame];
    });
    currentFrame = (currentFrame + 1) % frames.length;
  }, 200);
};

// Fade in on scroll
const initScrollAnimations = () => {
  const elements = document.querySelectorAll('.feature-card, .use-case, .start-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';

        setTimeout(() => {
          entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 50);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
};

// Waitlist form submission - sends emails to Google Sheet
const initWaitlistForm = () => {
  const form = document.getElementById('waitlistForm');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[name="email"]');
    const email = emailInput.value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Validate email
    if (!isValidEmail(email)) {
      submitBtn.textContent = '✗ Invalid email';
      submitBtn.style.background = 'var(--color-error)';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
      }, 9000);
      return;
    }

    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining...';

    try {
      // Get the deployment URL from window.GOOGLE_SHEET_URL
      // This should be set in index.html before the script loads
      const deploymentUrl = window.GOOGLE_SHEET_URL || '';

      if (!deploymentUrl) {
        throw new Error('Google Sheet URL not configured');
      }

      // Send to Google Sheet via Apps Script
      const response = await fetch(
        deploymentUrl + '?email=' + encodeURIComponent(email),
        {method: 'POST'}
      );

      const data = await response.json();

      if (data.success) {
        // Success
        submitBtn.textContent = '✓ Joined!';
        submitBtn.style.background = 'var(--color-success, #10b981)';
        emailInput.value = '';

        // Show success message
        const message = document.createElement('p');
        message.className = 'text-sm text-accent mt-4';
        message.textContent = 'Thanks for your interest! Will keep you up to date.';
        form.appendChild(message);

        // Reset button after delay
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          message.remove();
        }, 9000);
      } else {
        throw new Error(data.message || 'Failed to save email');
      }

    } catch (error) {
      console.error('Signup error:', error);

      // Error state
      submitBtn.textContent = '✗ Error';
      submitBtn.style.background = 'var(--color-error, #ef4444)';

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 9000);
    }
  });
};

// Email validation helper
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Add hover glow effect to feature cards
const initCardGlowEffect = () => {
  const cards = document.querySelectorAll('.feature-card, .start-card, .use-case');

  cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 0 20px rgba(255, 110, 58, 0.3)';
    });

    card.addEventListener('mouseleave', function () {
      if (!this.classList.contains('feature-card-highlight')) {
        this.style.boxShadow = '';
      }
    });
  });
};

// Keyboard navigation
const initKeyboardNav = () => {
  let focusableElements = [];

  const updateFocusableElements = () => {
    focusableElements = Array.from(
      document.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])')
    ).filter(el => !el.disabled && el.offsetParent !== null);
  };

  updateFocusableElements();

  // Re-update on menu toggle
  document.querySelector('.navigation-toggle')?.addEventListener('click', () => {
    setTimeout(updateFocusableElements, 300);
  });
};

// Initialize all features
const init = () => {
  initNavigation();
  initSmoothScroll();
  initSpinner();
  initScrollAnimations();
  initWaitlistForm();
  initCardGlowEffect();
  initKeyboardNav();

  // Log version
  console.log('%cAeqio Website', 'font-size: 20px; font-weight: bold; color: #ff6e3a;');
  console.log('%cBuilt with E2B-inspired design framework', 'color: #9ca3af;');
};

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Expose for debugging
window.aeqio = {
  version: '0.1.0',
  framework: 'e2b-inspired'
};
