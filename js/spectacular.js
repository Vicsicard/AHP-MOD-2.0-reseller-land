// AHP Mod 2.0 Reseller Landing Page - Spectacular Interactive Features
// Advanced UI/UX JavaScript for premium user experience

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SCROLL PROGRESS INDICATOR ===== (REMOVED)
    function createScrollProgress() {
        // Functionality completely removed
        console.log('Scroll progress indicator removed');
    }
    
    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    function initScrollAnimations() {
        // Completely disabled to remove sweep/curtain effect
        console.log('Scroll animations disabled to eliminate sweep/curtain effect');
        
        // Instead of animating elements on scroll, make them all visible immediately
        document.querySelectorAll('section, .animate-on-scroll, .section-title, .stagger-parent, .stagger-child').forEach(el => {
            // Add the in-view class to all elements immediately
            el.classList.add('in-view');
            el.classList.add('animate-in');
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
    
    // ===== PARTICLE SYSTEM =====
    function createParticleSystem() {
        // System disabled
        console.log('Particle system disabled');
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
    
    // ===== HERO PARALLAX EFFECT =====
    function initHeroParallax() {
        const hero = document.querySelector('.hero-section');
        const heroTitle = document.querySelector('.hero-title');
        const heroBadge = document.querySelector('.hero-content .badge');
        let heroBg = hero.querySelector('.hero-parallax-bg');
        
        // If no overlay exists, create one for parallax
        if (!heroBg) {
            heroBg = document.createElement('div');
            heroBg.className = 'hero-parallax-bg';
            heroBg.style.position = 'absolute';
            heroBg.style.top = '0';
            heroBg.style.left = '0';
            heroBg.style.width = '100%';
            heroBg.style.height = '100%';
            heroBg.style.pointerEvents = 'none';
            heroBg.style.zIndex = '1';
            heroBg.style.background = 'radial-gradient(circle at 60% 40%, rgba(139,92,246,0.13) 0%, transparent 80%)';
            hero.appendChild(heroBg);
        }

        // Helper to clamp values
        function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

        // Mousemove Parallax (desktop)
        function onMouseMove(e) {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            // Background moves most, then title, then badge
            heroBg.style.transform = `translate3d(${x*40}px, ${y*40}px, 0)`;
            if (heroTitle) heroTitle.style.transform = `translate3d(${x*18}px, ${y*16}px, 0)`;
            if (heroBadge) heroBadge.style.transform = `translate3d(${x*12}px, ${y*10}px, 0)`;
        }
        // Reset transforms
        function onMouseLeave() {
            heroBg.style.transform = '';
            if (heroTitle) heroTitle.style.transform = '';
            if (heroBadge) heroBadge.style.transform = '';
        }

        // Scroll Parallax (mobile/fallback)
        function onScroll() {
            const scrollY = window.scrollY || window.pageYOffset;
            const maxScroll = 200;
            const norm = clamp(scrollY / maxScroll, 0, 1);
            heroBg.style.transform = `translate3d(0, ${norm*30}px, 0)`;
            if (heroTitle) heroTitle.style.transform = `translate3d(0, ${norm*12}px, 0)`;
            if (heroBadge) heroBadge.style.transform = `translate3d(0, ${norm*8}px, 0)`;
        }

        // Feature detection for pointer events
        if (window.matchMedia('(pointer: fine)').matches) {
            hero.addEventListener('mousemove', onMouseMove);
            hero.addEventListener('mouseleave', onMouseLeave);
        } else {
            window.addEventListener('scroll', onScroll);
        }
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
        initHeroParallax(); // <-- Add parallax effect
        // Add loaded class to body for CSS animations
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
        console.log('🚀 AHP Mod 2.0 Spectacular UI/UX Initialized!');
    }
    // Start the magic (with scroll progress indicator removed)
    init();
    initHeroSplitTextAnimation();
    ensureCTALinks();
    enhanceCTAMicroEffects();

// ===== ENHANCE CTA BUTTON LINKS =====
function ensureCTALinks() {
    // Always point CTAs to onboarding
    document.querySelectorAll('.cta-button, .value-cta-button, .final-cta-button, .btn-primary').forEach(btn => {
        if (btn.tagName === 'A') {
            btn.setAttribute('href', '/reseller-onboarding');
        }
    });
}

// ===== ENHANCED CTA MICRO-INTERACTIONS =====
function enhanceCTAMicroEffects() {
    // Ripple effect
    document.querySelectorAll('.cta-button, .btn, .value-cta-button, .final-cta-button').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Remove old ripples
            btn.querySelectorAll('.ripple-effect').forEach(r => r.remove());
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
        // Glow on hover
        btn.addEventListener('mouseenter', function() {
            btn.classList.add('glow-effect');
        });
        btn.addEventListener('mouseleave', function() {
            btn.classList.remove('glow-effect');
        });
    });
}

// ===== SPLIT TEXT ANIMATION FOR HERO TITLE =====
function initHeroSplitTextAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    // Prevent double-splitting
    if (heroTitle.classList.contains('split-animated')) return;
    heroTitle.classList.add('split-animated');
    const text = heroTitle.textContent.trim();
    const words = text.split(' ');
    heroTitle.innerHTML = words.map((word, i) => `<span class="split-word" style="animation-delay:${i * 0.12}s">${word}</span>`).join(' ');
    // Trigger animation (reflow)
    setTimeout(() => {
        heroTitle.querySelectorAll('.split-word').forEach(span => {
            span.classList.add('split-animate-in');
        });
    }, 100);
}


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
