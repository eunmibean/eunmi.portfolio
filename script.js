// Portfolio Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeNavigation();
    initializeContactForm();
    initializeSmoothScrolling();

    // Show home tab by default
    showTab('home');
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const heroButtons = document.querySelectorAll('[data-tab]');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
            updateActiveNavLink(this);
        });
    });

    // Add click event listeners to hero buttons
    heroButtons.forEach(button => {
        if (button.classList.contains('nav-link')) return; // Skip nav links

        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            if (tabName) {
                showTab(tabName);
                updateActiveNavLink(document.querySelector(`.nav-link[data-tab="${tabName}"]`));
            }
        });
    });
}

// Show specific tab content
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Show the selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    if (activeLink) {
        activeLink.classList.add('active');
    }
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

// Smooth scrolling functionality
function initializeSmoothScrolling() {
    // Add smooth scrolling behavior to any anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's a tab navigation (handled by tab system)
            if (this.hasAttribute('data-tab')) {
                return;
            }

            // Handle other anchor links
            if (href && href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Utility function to add smooth animations on scroll (optional enhancement)
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
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skills-category');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
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

// Initialize scroll animations when page loads
window.addEventListener('load', function() {
    // Uncomment the line below to enable scroll animations
    // initializeScrollAnimations();
});

// Handle window resize events
window.addEventListener('resize', function() {
    handleMobileNavigation();
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Handle tab navigation with keyboard
    if (e.key === 'Tab') {
        // Let default behavior handle focus management
        return;
    }

    // Handle Escape key to close any open modals (future enhancement)
    if (e.key === 'Escape') {
        // Could be used for closing modals or overlay content
        return;
    }
});

// Export functions for external use (if needed)
window.portfolioUtils = {
    showTab,
    updateActiveNavLink,
    handleFormSubmission
};