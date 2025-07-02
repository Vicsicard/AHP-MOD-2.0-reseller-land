// AHP Mod 2.0 Reseller Landing Page JavaScript - Enhanced

// FAQ Accordion Functionality
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // If the clicked item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth scrolling for anchor links (if any are added)
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Advanced Scroll Animation Manager - DISABLED to remove sweep/curtain effect
    class ScrollAnimationManager {
        constructor() {
            console.log('ScrollAnimationManager disabled to eliminate sweep/curtain effect');
            
            // Instead of setting up animations, make all elements visible immediately
            document.querySelectorAll('.animate-on-scroll, .fade-in, .slide-up, .slide-in-left, .slide-in-right').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
                el.style.transition = 'none';
                el.classList.add('in-view');
                el.classList.add('visible');
            });
            
            // Only keep non-animation related functionality
            this.setupScrollProgress();
            this.setupRippleEffects();
        }
        
        // Disabled animation handling
        handleIntersection(entries) {
            // Do nothing - animations disabled
        }
        
        animateElement(element) {
            const delayMatch = element.className.match(/delay-(\d+)/);
            const delay = delayMatch ? parseInt(delayMatch[1]) : 0;
            
            setTimeout(() => {
                element.classList.add('visible');
                this.animatedElements.add(element);
                
                // Trigger custom animation event
                element.dispatchEvent(new CustomEvent('elementAnimated', {
                    detail: { element }
                }));
            }, delay);
        }
        
        observeElements() {
            // Disabled to remove sweep/curtain effect
            console.log('observeElements disabled to eliminate sweep/curtain effect');
            // No elements will be observed for animations
        }
        
        setupScrollProgress() {
            // Create scroll progress indicator
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-indicator';
            progressBar.innerHTML = '<div class="scroll-progress"></div>';
            document.body.appendChild(progressBar);
            
            const progress = progressBar.querySelector('.scroll-progress');
            let ticking = false;
            
            const updateProgress = () => {
                const scrolled = window.pageYOffset;
                const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
                const percentage = (scrolled / maxHeight) * 100;
                
                progress.style.width = `${Math.min(percentage, 100)}%`;
                ticking = false;
            };
            
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(updateProgress);
                    ticking = true;
                }
            });
        }
        
        setupRippleEffects() {
            // Add ripple effect to buttons
            document.querySelectorAll('.cta-button, .final-cta-button').forEach(button => {
                button.addEventListener('click', this.createRipple.bind(this));
            });
        }
        
        createRipple(event) {
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    }
    
    // Initialize the scroll animation manager
    const scrollManager = new ScrollAnimationManager();
    
    // Add hover effects for floating animations
    const floatingElements = document.querySelectorAll('.icon, .value-icon');
    
    floatingElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
    
    // Track CTA button clicks for analytics (placeholder)
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Analytics tracking would go here
            console.log('CTA clicked:', this.textContent.trim());
            
            // Add a subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Performance optimization: Reduce animations on low-end devices
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
}

// Add loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger any entrance animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
});

// Handle form submissions (if forms are added later)
function handleFormSubmission(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Processing...';
        submitButton.disabled = true;
        
        // Simulate form processing
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message or redirect
            console.log('Form submitted successfully');
        }, 2000);
    });
}

// Utility function for debouncing scroll events
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

// Add scroll-based header behavior (if header is added)
let lastScrollTop = 0;
const scrollHandler = debounce(function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scroll direction detection for future header animations
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
    } else {
        // Scrolling up
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, 10);

window.addEventListener('scroll', scrollHandler);

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Handle Enter key on FAQ questions
    if (e.key === 'Enter' && e.target.classList.contains('faq-question')) {
        e.target.click();
    }
    
    // Handle Escape key to close FAQ items
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Add focus management for better accessibility
document.addEventListener('focusin', function(e) {
    if (e.target.matches('.cta-button, .faq-question')) {
        e.target.style.outline = '2px solid var(--primary-light)';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', function(e) {
    if (e.target.matches('.cta-button, .faq-question')) {
        e.target.style.outline = '';
        e.target.style.outlineOffset = '';
    }
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('AHP Mod 2.0 Reseller Landing Page loaded successfully');
    
    // Add any additional initialization here
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '1';
    }
});
