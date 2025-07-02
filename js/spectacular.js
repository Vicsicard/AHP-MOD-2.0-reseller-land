// AHP Mod 2.0 Reseller Landing Page - Spectacular Interactive Features
// Advanced UI/UX JavaScript for premium user experience

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SCROLL PROGRESS INDICATOR =====
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);
        
        const progressBarFill = progressBar.querySelector('.scroll-progress-bar');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBarFill.style.width = scrollPercent + '%';
        });
    }
    
    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Add staggered animations for cards
                    if (entry.target.classList.contains('stagger-parent')) {
                        const children = entry.target.querySelectorAll('.stagger-child');
                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('animate-in');
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);
        
        // Observe all sections and animated elements
        document.querySelectorAll('section, .animate-on-scroll, .section-title').forEach(el => {
            observer.observe(el);
        });
    }
    
    // ===== MAGNETIC BUTTON EFFECTS =====
    function initMagneticButtons() {
        document.querySelectorAll('.cta-button, .magnetic-btn').forEach(button => {
            button.addEventListener('mouseenter', function(e) {
                this.classList.add('magnetic-active');
            });
            
            button.addEventListener('mouseleave', function(e) {
                this.classList.remove('magnetic-active');
                this.style.transform = '';
            });
            
            button.addEventListener('mousemove', function(e) {
                if (this.classList.contains('magnetic-active')) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    const moveX = x * 0.1;
                    const moveY = y * 0.1;
                    
                    this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
                }
            });
        });
    }
    
    // ===== RIPPLE EFFECT FOR BUTTONS =====
    function initRippleEffect() {
        document.querySelectorAll('.cta-button, .btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // ===== FLOATING ACTION BUTTON =====
    function createFloatingActionButton() {
        const fab = document.createElement('button');
        fab.className = 'fab tooltip';
        fab.setAttribute('data-tooltip', 'Start Your Journey');
        fab.innerHTML = '🚀';
        fab.addEventListener('click', () => {
            document.querySelector('#hero .cta-button').click();
        });
        document.body.appendChild(fab);
        
        // Hide/show FAB based on scroll
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 500) {
                fab.style.opacity = '1';
                fab.style.visibility = 'visible';
            } else {
                fab.style.opacity = '0';
                fab.style.visibility = 'hidden';
            }
            
            // Add bounce effect when scrolling up
            if (scrollTop < lastScrollTop && scrollTop > 500) {
                fab.classList.add('micro-bounce');
                setTimeout(() => fab.classList.remove('micro-bounce'), 600);
            }
            lastScrollTop = scrollTop;
        });
    }
    
    // ===== PARTICLE SYSTEM ===== (REMOVED TO ELIMINATE CURTAIN EFFECT)
    function createParticleSystem() {
        // Completely disabled to remove curtain/sweep effect
        console.log('Particle system disabled to eliminate curtain/sweep effect');
    }
    
    // ===== ENHANCED CARD INTERACTIONS =====
    function initCardInteractions() {
        document.querySelectorAll('.client-value-card, .enhanced-card, .glass-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('hover-active');
                
                // Add glow effect to nearby cards
                const siblings = Array.from(this.parentNode.children);
                siblings.forEach(sibling => {
                    if (sibling !== this) {
                        sibling.style.opacity = '0.7';
                    }
                });
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('hover-active');
                
                // Remove glow effect from nearby cards
                const siblings = Array.from(this.parentNode.children);
                siblings.forEach(sibling => {
                    sibling.style.opacity = '1';
                });
            });
            
            // 3D tilt effect
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION =====
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // ===== TYPING ANIMATION FOR HERO TEXT =====
    function initTypingAnimation() {
        const heroTitle = document.querySelector('.hero-section h1');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            heroTitle.style.borderRight = '2px solid #8b5cf6';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    setTimeout(() => {
                        heroTitle.style.borderRight = 'none';
                    }, 1000);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    }
    
    // ===== PERFORMANCE OPTIMIZATIONS =====
    function optimizePerformance() {
        // Lazy load images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading-shimmer');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Throttle scroll events
        let ticking = false;
        function updateOnScroll() {
            // Scroll-based animations here
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        });
    }
    
    // ===== INITIALIZE ALL FEATURES =====
    function init() {
        createScrollProgress();
        initScrollAnimations();
        initMagneticButtons();
        initRippleEffect();
        createFloatingActionButton();
        createParticleSystem();
        initCardInteractions();
        initSmoothScrolling();
        // initTypingAnimation(); // Uncomment for typing effect
        optimizePerformance();
        
        // Add loaded class to body for CSS animations
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
        
        console.log('🚀 AHP Mod 2.0 Spectacular UI/UX Initialized!');
    }
    
    // Start the magic
    init();
});

// ===== CSS INJECTION FOR DYNAMIC STYLES =====
const dynamicStyles = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    .animate-in {
        animation: slideUp 0.6s ease forwards;
    }
    
    .hover-active {
        z-index: 10;
    }
    
    body.loaded .hero-section {
        animation: fadeIn 1s ease;
    }
    
    .magnetic-active {
        transition: transform 0.1s ease;
    }
`;

// Inject dynamic styles
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);
