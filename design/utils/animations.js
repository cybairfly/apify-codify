/**
 * Animation Utilities
 * Helper functions for creating smooth animations
 */

/**
 * Create a keyframe animation
 */
const createKeyframes = (name, frames) => {
  const keyframeString = Object.entries(frames)
    .map(([percentage, styles]) => {
      const styleString = Object.entries(styles)
        .map(([prop, value]) => `${prop}: ${value};`)
        .join(' ');
      return `${percentage} { ${styleString} }`;
    })
    .join(' ');
  
  return `@keyframes ${name} { ${keyframeString} }`;
};

/**
 * Rotate ASCII character animation
 */
const rotateAscii = (element, frames = ['|', '/', '-', '\\'], duration = 1000) => {
  let currentFrame = 0;
  
  const animate = () => {
    if (element) {
      element.textContent = frames[currentFrame];
      currentFrame = (currentFrame + 1) % frames.length;
    }
  };
  
  const interval = setInterval(animate, duration / frames.length);
  
  return () => clearInterval(interval);
};

/**
 * Fade in on scroll
 */
const fadeInOnScroll = (elements, options = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold, rootMargin });
  
  elements.forEach(el => observer.observe(el));
  
  return observer;
};

/**
 * Stagger animation for list items
 */
const staggerAnimation = (elements, delay = 100) => {
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * delay}ms`;
    el.classList.add('stagger-item');
  });
};

/**
 * Typewriter effect
 */
const typewriter = (element, text, speed = 50) => {
  let index = 0;
  element.textContent = '';
  
  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  };
  
  type();
};

/**
 * Glitch effect animation
 */
const glitchEffect = (element, duration = 300) => {
  const original = element.textContent;
  const glitchChars = '!<>-_\\/[]{}—=+*^?#$@';
  
  let frame = 0;
  const maxFrames = 10;
  
  const animate = () => {
    if (frame >= maxFrames) {
      element.textContent = original;
      return;
    }
    
    element.textContent = original.split('').map(char => {
      if (char === ' ') return char;
      return Math.random() < 0.3 
        ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
        : char;
    }).join('');
    
    frame++;
    setTimeout(animate, duration / maxFrames);
  };
  
  animate();
};

/**
 * Hover glow effect
 */
const hoverGlow = (element, color = '#00ff88') => {
  element.addEventListener('mouseenter', () => {
    element.style.boxShadow = `0 0 20px ${color}40`;
    element.style.borderColor = color;
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.boxShadow = '';
    element.style.borderColor = '';
  });
};

/**
 * Pulse animation
 */
const pulse = (element, scale = 1.05, duration = 1000) => {
  element.style.animation = `pulse ${duration}ms ease-in-out infinite`;
  
  // Create keyframes if not exists
  if (!document.getElementById('pulse-keyframes')) {
    const style = document.createElement('style');
    style.id = 'pulse-keyframes';
    style.textContent = `
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(${scale}); }
      }
    `;
    document.head.appendChild(style);
  }
};

/**
 * Slide in animation
 */
const slideIn = (element, direction = 'left', duration = 400) => {
  const translations = {
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    top: 'translateY(-100%)',
    bottom: 'translateY(100%)',
  };
  
  element.style.transform = translations[direction];
  element.style.opacity = '0';
  element.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.transform = 'translate(0)';
      element.style.opacity = '1';
    });
  });
};

/**
 * Counter animation
 */
const animateCounter = (element, target, duration = 2000) => {
  const start = parseInt(element.textContent) || 0;
  const range = target - start;
  const startTime = Date.now();
  
  const update = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    element.textContent = Math.round(start + range * easeOut);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };
  
  requestAnimationFrame(update);
};

/**
 * Parallax scroll effect
 */
const parallax = (elements, speed = 0.5) => {
  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    
    elements.forEach(el => {
      const offset = el.offsetTop;
      const distance = scrolled - offset;
      el.style.transform = `translateY(${distance * speed}px)`;
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

module.exports = {
  createKeyframes,
  rotateAscii,
  fadeInOnScroll,
  staggerAnimation,
  typewriter,
  glitchEffect,
  hoverGlow,
  pulse,
  slideIn,
  animateCounter,
  parallax,
};
