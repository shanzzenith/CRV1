// CityRewards.app Interactive Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initMapFilters();
    initActionFilters();
    initAnimations();
    initDashboard();
    initMobileMenu();
    initWaitlistModal();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Map filters functionality
function initMapFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const mapPlaceholder = document.querySelector('.map-placeholder');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            updateMapDisplay(filter);
        });
    });
}

function updateMapDisplay(filter) {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    const mapContainer = document.querySelector('.map-container');
    
    // Add loading animation
    mapContainer.style.opacity = '0.7';
    
    setTimeout(() => {
        // Update map content based on filter
        let mapContent = '';
        
        switch(filter) {
            case 'sustainability':
                mapContent = `
                    <i class="fas fa-leaf"></i>
                    <h3>Sustainability Actions</h3>
                    <p>Showing tree planting, recycling, and energy-saving opportunities</p>
                    <div class="map-legend">
                        <div class="legend-item">
                            <div class="legend-color sustainability"></div>
                            <span>Tree Planting (12 locations)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color sustainability"></div>
                            <span>Recycling Centers (8 locations)</span>
                        </div>
                    </div>
                `;
                break;
            case 'volunteering':
                mapContent = `
                    <i class="fas fa-hands-helping"></i>
                    <h3>Volunteering Opportunities</h3>
                    <p>Community events and volunteer activities near you</p>
                    <div class="map-legend">
                        <div class="legend-item">
                            <div class="legend-color volunteering"></div>
                            <span>Community Cleanup (5 events)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color volunteering"></div>
                            <span>Food Banks (3 locations)</span>
                        </div>
                    </div>
                `;
                break;
            case 'shopping':
                mapContent = `
                    <i class="fas fa-shopping-bag"></i>
                    <h3>Local Shopping Partners</h3>
                    <p>Support local businesses and earn rewards</p>
                    <div class="map-legend">
                        <div class="legend-item">
                            <div class="legend-color shopping"></div>
                            <span>Green Market (4 locations)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color shopping"></div>
                            <span>Local Shops (12 locations)</span>
                        </div>
                    </div>
                `;
                break;
            case 'repair':
                mapContent = `
                    <i class="fas fa-tools"></i>
                    <h3>Repair & Fix-it Actions</h3>
                    <p>Learn repair skills and reduce waste</p>
                    <div class="map-legend">
                        <div class="legend-item">
                            <div class="legend-color repair"></div>
                            <span>Repair Workshops (3 locations)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color repair"></div>
                            <span>Tool Libraries (2 locations)</span>
                        </div>
                    </div>
                `;
                break;
            default:
                mapContent = `
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>All Action Opportunities</h3>
                    <p>Discover all available actions across the city</p>
                    <div class="map-legend">
                        <div class="legend-item">
                            <div class="legend-color sustainability"></div>
                            <span>Sustainability (20 locations)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color volunteering"></div>
                            <span>Volunteering (8 events)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color shopping"></div>
                            <span>Local Shopping (16 locations)</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color repair"></div>
                            <span>Repair Actions (5 locations)</span>
                        </div>
                    </div>
                `;
        }
        
        mapPlaceholder.innerHTML = mapContent;
        mapContainer.style.opacity = '1';
    }, 300);
}

// Action filters functionality
function initActionFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const actionCards = document.querySelectorAll('.action-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterActionCards(category, actionCards);
        });
    });
}

function filterActionCards(category, actionCards) {
    actionCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.dashboard-card, .action-card, .token-card, .impact-stat, .step');
    animatedElements.forEach(el => observer.observe(el));
}

// Dashboard functionality
function initDashboard() {
    // Simulate real-time updates
    updateDashboardStats();
    
    // Add click handlers for action suggestions
    const suggestions = document.querySelectorAll('.suggestion');
    suggestions.forEach(suggestion => {
        suggestion.addEventListener('click', function() {
            // Add visual feedback
            this.style.background = 'rgba(76, 175, 80, 0.2)';
            this.style.transform = 'scale(1.02)';
            
            setTimeout(() => {
                this.style.background = '';
                this.style.transform = '';
            }, 200);
            
            // Show participation modal or redirect
            showActionModal(this.querySelector('span').textContent);
        });
    });
    
    // Add click handlers for action cards
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        const participateBtn = card.querySelector('.btn-primary');
        participateBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const actionTitle = card.querySelector('h3').textContent;
            showActionModal(actionTitle);
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function updateDashboardStats() {
    // Simulate real-time stat updates
    const statValues = document.querySelectorAll('.stat-value');
    
    setInterval(() => {
        statValues.forEach(stat => {
            const currentValue = parseInt(stat.textContent.replace(',', ''));
            const increment = Math.floor(Math.random() * 3) + 1;
            const newValue = currentValue + increment;
            
            // Animate the number change
            animateNumber(stat, currentValue, newValue);
        });
    }, 10000); // Update every 10 seconds
}

function animateNumber(element, start, end) {
    const duration = 1000;
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function showActionModal(actionTitle) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'action-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Join Action: ${actionTitle}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Ready to participate in this action? You'll earn rewards and contribute to your community!</p>
                <div class="modal-actions">
                    <button class="btn-primary">Confirm Participation</button>
                    <button class="btn-outline modal-close">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        animation: slideInUp 0.3s ease-out;
    `;
    
    document.body.appendChild(modal);
    
    // Add close functionality
    const closeBtns = modal.querySelectorAll('.modal-close');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.remove();
        });
    });
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            navActions.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navActions.classList.remove('active');
            });
        });
    }
}

// Utility functions
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

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
        }
        
        .nav-actions.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            margin-top: 60px;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #4CAF50, #00BCD4);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
initScrollProgress();

// Add particle effect to hero section
function initParticleEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0.1;
    `;
    hero.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    function resizeCanvas() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.1
        };
    }
    
    function initParticles() {
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }
    
    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        });
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(76, 175, 80, ${particle.opacity})`;
            ctx.fill();
        });
    }
    
    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    initParticles();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
}

// Initialize particle effect
initParticleEffect();

// Waitlist Modal functionality
function initWaitlistModal() {
    const waitlistModal = document.getElementById('waitlistModal');
    const startContributingBtns = document.querySelectorAll('.btn-primary');
    const closeModalBtns = document.querySelectorAll('.modal-close');
    const waitlistForm = document.getElementById('waitlistForm');
    
    // Open modal when "Start Contributing" buttons are clicked
    startContributingBtns.forEach(btn => {
        if (btn.textContent.includes('Start Contributing') || btn.textContent.includes('Get Started')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openWaitlistModal();
            });
        }
    });
    
    // Close modal functionality
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeWaitlistModal);
    });
    
    // Close modal when clicking outside
    waitlistModal.addEventListener('click', function(e) {
        if (e.target === waitlistModal) {
            closeWaitlistModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && waitlistModal.classList.contains('active')) {
            closeWaitlistModal();
        }
    });
    
    // Handle redirect button click
    const redirectBtn = document.querySelector('.waitlist-redirect .btn-primary');
    if (redirectBtn) {
        redirectBtn.addEventListener('click', function() {
            // Optional: Track the click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'waitlist_redirect_click', {
                    'event_category': 'engagement',
                    'event_label': 'google_forms'
                });
            }
        });
    }
}

function openWaitlistModal() {
    const waitlistModal = document.getElementById('waitlistModal');
    waitlistModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus on first input
    setTimeout(() => {
        const firstInput = waitlistModal.querySelector('input');
        if (firstInput) firstInput.focus();
    }, 300);
}

function closeWaitlistModal() {
    const waitlistModal = document.getElementById('waitlistModal');
    waitlistModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Reset form
    const form = document.getElementById('waitlistForm');
    form.reset();
    
    // Reset to form view if it was showing success
    const modalBody = waitlistModal.querySelector('.modal-body');
    const successView = modalBody.querySelector('.modal-success');
    if (successView) {
        successView.remove();
        const formView = modalBody.querySelector('.waitlist-form');
        if (formView) {
            formView.style.display = 'flex';
        }
    }
}

function handleWaitlistSubmission() {
    const form = document.getElementById('waitlistForm');
    const formData = new FormData(form);
    const name = formData.get('entry.1234567890');
    const email = formData.get('entry.0987654321');
    
    // Basic validation
    if (!name || !email) {
        showFormError('Please fill in all required fields.');
        return;
    }
    
    if (!isValidEmail(email)) {
        showFormError('Please enter a valid email address.');
        return;
    }
    
    // Check if Google Form URL is set
    const formAction = form.getAttribute('action');
    if (formAction === 'YOUR_GOOGLE_FORM_URL') {
        showFormError('Google Form URL not configured. Please contact the administrator.');
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;
    
    // Submit to Google Forms
    // Note: Google Forms will handle the submission and redirect
    // We'll show success message after a short delay
    setTimeout(() => {
        // Show success message
        showWaitlistSuccess(name, email);
        
        // Log for debugging
        console.log('Waitlist signup submitted to Google Forms:', { name, email });
        
        // Optional: Send to analytics or tracking service
        if (typeof gtag !== 'undefined') {
            gtag('event', 'waitlist_signup', {
                'event_category': 'engagement',
                'event_label': 'waitlist_signup'
            });
        }
    }, 1000);
}

function showWaitlistSuccess(name, email) {
    const modalBody = document.querySelector('#waitlistModal .modal-body');
    const form = modalBody.querySelector('.waitlist-form');
    const modalFooter = modalBody.querySelector('.modal-footer');
    
    // Hide form and footer
    form.style.display = 'none';
    modalFooter.style.display = 'none';
    
    // Create success view
    const successView = document.createElement('div');
    successView.className = 'modal-success';
    successView.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Welcome to CityRewards.app, ${name}!</h3>
        <p>Thank you for joining our waitlist! We'll notify you as soon as CityRewards.app launches in your area.</p>
        <p>Keep an eye on your inbox for updates and early access opportunities.</p>
        <button class="btn-primary" onclick="closeWaitlistModal()">Got it!</button>
    `;
    
    modalBody.appendChild(successView);
}

function showFormError(message) {
    // Remove existing error messages
    const existingError = document.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        background: #fee;
        color: #c33;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 16px;
        border: 1px solid #fcc;
        font-size: 14px;
        text-align: center;
    `;
    errorDiv.textContent = message;
    
    // Insert before form
    const form = document.getElementById('waitlistForm');
    form.parentNode.insertBefore(errorDiv, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
