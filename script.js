/* ============================================
   PORTFOLIO WEBSITE JAVASCRIPT
   Handles scroll animations, navigation, and interactions
   ============================================ */

/* ============================================
   CONFIGURATION - Edit these values to customize behavior
   ============================================ */
const CONFIG = {
    // Scroll animation threshold (0-1, where 0.1 means 10% visible)
    intersectionThreshold: 0.1,
    
    // Parallax speed for background images
    parallaxSpeed: 0.5,
    
    // Smooth scroll offset for navigation (accounts for fixed navbar)
    scrollOffset: 80,
    
    // Navbar scroll threshold (pixels from top before adding 'scrolled' class)
    navbarScrollThreshold: 50,
};

/* ============================================
   INITIALIZATION
   Wait for DOM to be fully loaded before running scripts
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initParallaxEffect();
    initContactForm();
    initSmoothScroll();
    updateActiveNavLink();
});

/* ============================================
   NAVIGATION FUNCTIONALITY
   Handles mobile menu toggle and scroll effects
   ============================================ */
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add background to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > CONFIG.navbarScrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   SMOOTH SCROLLING
   Enables smooth scroll to sections when clicking navigation links
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                // Calculate position accounting for fixed navbar
                const targetPosition = targetSection.offsetTop - CONFIG.scrollOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   ACTIVE NAVIGATION LINK
   Updates active state based on current scroll position
   ============================================ */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - CONFIG.scrollOffset - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS
   Reveals elements as they come into viewport
   ============================================ */
function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.reveal-text, .reveal-fade, .reveal-slide, .reveal-scale, .timeline-item, .experience-item, .project-card'
    );
    
    // Intersection Observer options
    const observerOptions = {
        threshold: CONFIG.intersectionThreshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
    };
    
    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class with a slight delay for stagger effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                
                // Stop observing this element once it's been revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/* ============================================
   PARALLAX EFFECT
   Creates depth by moving background images at different speeds
   ============================================ */
function initParallaxEffect() {
    const backgroundImages = document.querySelectorAll('.background-image');
    
    window.addEventListener('scroll', function() {
        backgroundImages.forEach(bg => {
            const section = bg.closest('.section');
            
            if (section) {
                const rect = section.getBoundingClientRect();
                const scrollPercent = -rect.top / (rect.height + window.innerHeight);
                
                // Apply parallax only when section is in viewport
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const parallaxValue = scrollPercent * 100 * CONFIG.parallaxSpeed;
                    bg.style.transform = `translateY(${parallaxValue}px)`;
                    bg.classList.add('parallax');
                } else {
                    bg.classList.remove('parallax');
                }
            }
        });
    });
}

/* ============================================
   CONTACT FORM HANDLING
   Validates and handles form submission
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (validateForm(formData)) {
                handleFormSubmission(formData);
            }
        });
    }
}

/**
 * Validates contact form data
 * @param {Object} data - Form data object
 * @returns {boolean} - True if valid, false otherwise
 */
function validateForm(data) {
    // Check if all fields are filled
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Please fill in all fields', 'error');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    return true;
}

/**
 * Handles form submission
 * @param {Object} data - Form data object
 * 
 * NOTE: This is a placeholder implementation
 * TO IMPLEMENT: Replace this with your actual form submission logic
 * Options include:
 * 1. Send to a backend API endpoint
 * 2. Use a service like Formspree, EmailJS, or Netlify Forms
 * 3. Integrate with your email service
 */
function handleFormSubmission(data) {
    console.log('Form submitted with data:', data);
    
    // Simulate form submission (remove this in production)
    setTimeout(() => {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        document.getElementById('contact-form').reset();
    }, 1000);
    
    /* 
    EXAMPLE: Sending to an API endpoint
    
    fetch('YOUR_API_ENDPOINT_HERE', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        showNotification('Message sent successfully!', 'success');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        showNotification('Error sending message. Please try again.', 'error');
        console.error('Error:', error);
    });
    */
    
    /*
    EXAMPLE: Using EmailJS (https://www.emailjs.com/)
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
        .then(function(response) {
            showNotification('Message sent successfully!', 'success');
            document.getElementById('contact-form').reset();
        }, function(error) {
            showNotification('Error sending message. Please try again.', 'error');
            console.error('EmailJS error:', error);
        });
    */
}

/**
 * Shows a notification message to the user
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success' or 'error')
 */
function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        backgroundColor: type === 'success' ? '#2ecc71' : '#e74c3c',
        color: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        fontFamily: 'Source Sans 3, sans-serif',
        fontWeight: '600',
        maxWidth: '400px'
    });
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification animations to the page
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

/**
 * Debounce function to limit how often a function is called
 * Useful for scroll and resize events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to ensure a function is called at most once per interval
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   Use throttled versions for scroll events
   ============================================ */
const optimizedParallax = throttle(initParallaxEffect, 16); // ~60fps
window.addEventListener('scroll', optimizedParallax);

/* ============================================
   ADDITIONAL FEATURES (Optional)
   Uncomment these if you want to add more functionality
   ============================================ */

/**
 * Lazy loading for images
 * Improves initial page load performance
 */
/*
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}
*/

/**
 * Back to top button
 * Shows a button to scroll back to the top of the page
 */
/*
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
*/

/**
 * Dark mode toggle
 * Allows users to switch between light and dark themes
 */
/*
function initDarkMode() {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '🌙';
    toggleBtn.className = 'dark-mode-toggle';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 24px;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toggleBtn);
    
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}
*/

/**
 * Typing effect for hero title
 * Creates a typewriter animation for text
 */
/*
function initTypingEffect() {
    const text = document.querySelector('.hero-title').textContent;
    const element = document.querySelector('.hero-title');
    element.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}
*/

/* ============================================
   CONSOLE MESSAGE
   Leave a nice message for developers who inspect the page
   ============================================ */
console.log(
    '%c👋 Hello, Developer!',
    'font-size: 24px; font-weight: bold; color: #e74c3c;'
);
console.log(
    '%cInterested in how this portfolio was built? Check out the source code!',
    'font-size: 14px; color: #2c3e50;'
);
console.log(
    '%cBuilt with ❤️ using HTML, CSS, and JavaScript',
    'font-size: 12px; color: #95a5a6; font-style: italic;'
);
