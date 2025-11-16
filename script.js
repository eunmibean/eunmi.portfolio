// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeScrollNavigation();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeScrollAnimations();

    // Set initial active nav link
    updateActiveNavLink();
});

// Scroll-based navigation functionality
function initializeScrollNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll spy functionality
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    const scrollPos = window.scrollY + 150; // Offset for header height

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skills-table-container, .about-stats .stat, .key-skill-card');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
}

// Handle contact form submission
function handleFormSubmission(form) {
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Basic form validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission (replace with actual form handling)
    showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
    form.reset();

    // In a real implementation, you would send the data to your server here
    console.log('Form submitted:', { name, email, message });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form submission message
function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;

    // Add styles for the message
    messageElement.style.padding = '1rem';
    messageElement.style.borderRadius = '0.5rem';
    messageElement.style.marginBottom = '1rem';
    messageElement.style.fontWeight = '500';

    if (type === 'success') {
        messageElement.style.backgroundColor = '#dcfce7';
        messageElement.style.color = '#166534';
        messageElement.style.border = '1px solid #bbf7d0';
    } else {
        messageElement.style.backgroundColor = '#fef2f2';
        messageElement.style.color = '#dc2626';
        messageElement.style.border = '1px solid #fecaca';
    }

    // Insert message before the form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.parentNode.insertBefore(messageElement, contactForm);

        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

// Smooth scrolling functionality (for hero action buttons)
function initializeSmoothScrolling() {
    const heroButtons = document.querySelectorAll('.hero-actions a[href^="#"]');

    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active nav link after scrolling
                setTimeout(() => {
                    updateActiveNavLink();
                }, 100);
            }
        });
    });
}

// Add parallax effect to hero section
function initializeParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;

        if (heroSection) {
            heroSection.style.transform = `translateY(${parallax}px)`;
        }
    });
}

// Add scroll progress indicator
function initializeScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(to right, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Handle responsive navigation for mobile (if needed)
function handleMobileNavigation() {
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.header');

    // Add mobile menu toggle if screen is small
    if (window.innerWidth <= 768) {
        // Mobile navigation logic could be added here if needed
        // For now, the CSS handles responsive design adequately
    }
}

// Initialize additional features when page loads
window.addEventListener('load', function() {
    initializeScrollProgress();
    // Uncomment the line below to enable parallax effect
    // initializeParallaxEffect();
});

// Handle window resize events
window.addEventListener('resize', function() {
    handleMobileNavigation();
    updateActiveNavLink(); // Recalculate active section on resize
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Handle arrow key navigation between sections
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const sections = document.querySelectorAll('.section');
            const currentSection = getCurrentSection();
            const currentIndex = Array.from(sections).findIndex(section =>
                section.getAttribute('id') === currentSection
            );

            if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
                sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Handle Escape key to scroll to top
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Get current section based on scroll position
function getCurrentSection() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 150;
    let currentSection = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    return currentSection;
}

// Export functions for external use (if needed)
window.portfolioUtils = {
    updateActiveNavLink,
    handleFormSubmission,
    getCurrentSection
};