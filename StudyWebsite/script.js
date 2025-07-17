document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const checkbox = document.getElementById('checkbox');
    const body = document.body;
    const hamburger = document.querySelector('.hamburger');
    const faqItems = document.querySelectorAll('.faq-item');
    // const counters = document.querySelectorAll('.counter'); // Old counter selector - no longer used
    const sections = document.querySelectorAll('section');

    // Cinematic Slider Elements
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-slide');
    const indicators = document.querySelectorAll('.slider-indicator');
    let currentSlide = 0;
    let slideInterval;

    // Check for saved theme preference or use default
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    body.className = currentTheme;

    // Update checkbox state based on current theme
    if (currentTheme === 'dark-mode') {
        checkbox.checked = true;
    } else {
        checkbox.checked = false;
    }

    // Theme Toggle Functionality
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', function () {
        // Create mobile nav if it doesn't exist
        if (!document.querySelector('.mobile-nav')) {
            createMobileNav();
        }

        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle('active');
    });

    // FAQ Accordion
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Running Numbers Animation 
    function initCounters() {
        const stats = document.querySelectorAll('.stat-number');

        // Intersection Observer to start counting when stats are visible 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const countTo = parseInt(target.getAttribute('data-count'));
                    let count = 0;
                    const duration = 2000; // 2 seconds 
                    const increment = Math.ceil(countTo / (duration / 30)); // Update every 30ms 

                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= countTo) {
                            target.textContent = countTo.toLocaleString();
                            clearInterval(timer);
                        } else {
                            target.textContent = count.toLocaleString();
                        }
                    }, 30);

                    // Unobserve after starting animation 
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        // Observe all stat numbers 
        stats.forEach(stat => {
            observer.observe(stat);
        });
    }

    // Parallax Effects for Stats Section 
    function initParallax() {
        // Parallax for stats section background 
        gsap.to('.parallax-bg', {
            y: 100,
            scrollTrigger: {
                trigger: '.parallax-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // Scroll Animations
    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const revealPoint = 150;

            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('reveal', 'active');

                // Start counters when stats section is visible
                if (section.classList.contains('parallax-section') && !section.classList.contains('counted')) {
                    section.classList.add('counted');
                }
            }
        });
    }

    // Create Mobile Navigation
    function createMobileNav() {
        const mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';

        // Clone navigation links
        const navLinks = document.querySelector('.nav-links').cloneNode(true);
        const authButtons = document.querySelector('.auth-buttons').cloneNode(true);

        // Create close button
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-menu';
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';

        // Append elements to mobile nav
        mobileNav.appendChild(closeBtn);
        mobileNav.appendChild(navLinks);
        mobileNav.appendChild(authButtons);

        // Add event listener to close button
        closeBtn.addEventListener('click', function () {
            mobileNav.classList.remove('active');
        });

        // Append mobile nav to body
        document.body.appendChild(mobileNav);
    }

    // Add scroll reveal classes to sections
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.classList.add('reveal', 'fade-bottom');
        } else {
            section.classList.add('reveal', 'fade-left');
        }
    });

    // Initialize scroll animations
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load

    // Cinematic Slider Functionality
    function initCinematicSlider() {
        // Set initial active slide
        updateSlide();

        // Auto-advance slides
        startAutoSlide();

        // Add click handlers for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateSlide();
                resetAutoSlide();
            });
        });
    }

    function updateSlide() {
        // Update slider position
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update active state of slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });

        // Update active indicator
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Initialize the cinematic slider
    if (sliderTrack && slides.length > 0) {
        initCinematicSlider();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileNav = document.querySelector('.mobile-nav');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
            }
        });
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Animated background for buttons
    const animateButtons = () => {
        const primaryButtons = document.querySelectorAll('.btn-primary, .btn-signup');
        let isAlternate = false;

        setInterval(() => {
            primaryButtons.forEach(button => {
                button.style.background = isAlternate ? 'var(--dark-3)' : 'var(--dark-4)';
            });

            isAlternate = !isAlternate;
        }, 2000);
    };

    animateButtons();

    // Add hover effect to mentor cards
    const mentorCards = document.querySelectorAll('.mentor-card');
    mentorCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add hover effect to stream cards
    const streamCards = document.querySelectorAll('.stream-card');
    streamCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            const icon = this.querySelector('.stream-icon');
            icon.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            const icon = this.querySelector('.stream-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // Success Stories Slider Functionality 
    function initSuccessSlider() {
        const slider = document.querySelector('.success-slider');
        const prevBtn = document.querySelector('.success-prev-btn');
        const nextBtn = document.querySelector('.success-next-btn');
        const dots = document.querySelectorAll('.success-dot');
        let slideIndex = 0;

        if (!slider || !prevBtn || !nextBtn || dots.length === 0) {
            console.log('Success slider elements not found');
            return;
        }

        console.log('Initializing success slider with', dots.length, 'dots');

        // Set initial active dot 
        dots[0].classList.add('active');

        // Set initial slider position 
        slider.style.transform = 'translateX(0%)';

        // Previous button click 
        prevBtn.addEventListener('click', () => {
            slideIndex = (slideIndex > 0) ? slideIndex - 1 : dots.length - 1;
            updateSlider();
        });

        // Next button click 
        nextBtn.addEventListener('click', () => {
            slideIndex = (slideIndex < dots.length - 1) ? slideIndex + 1 : 0;
            updateSlider();
        });

        // Dot click events 
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                slideIndex = index;
                updateSlider();
            });
        });

        // Auto slide every 5 seconds 
        const autoSlideInterval = setInterval(() => {
            slideIndex = (slideIndex < dots.length - 1) ? slideIndex + 1 : 0;
            updateSlider();
        }, 5000);

        // Update slider position and active dot 
        function updateSlider() {
            slider.style.transform = `translateX(-${slideIndex * 33.333}%)`;

            // Update active dot 
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }

        // Call updateSlider once to ensure initial state is correct 
        updateSlider();
    }

    // Initialize the success slider
    if (document.querySelector('.success-slider') && document.querySelectorAll('.success-dot').length > 0) {
        initSuccessSlider();
    }

    // Initialize counters for stats section
    initCounters();

    // Initialize parallax effects if GSAP is available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        initParallax();
    } else {
        console.warn('GSAP or ScrollTrigger not available for parallax effects');
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    } else {
        console.warn('AOS not available for animations');
    }
});

// Add this to your existing JavaScript
// Mobile dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
    // For desktop dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            if (window.innerWidth > 768) {
                this.querySelector('.dropdown-content').style.display = 'block';
            }
        });

        dropdown.addEventListener('mouseleave', function () {
            if (window.innerWidth > 768) {
                this.querySelector('.dropdown-content').style.display = 'none';
            }
        });

        // For mobile dropdowns
        if (window.innerWidth <= 768) {
            const dropdownBtn = dropdown.querySelector('.dropdown-btn');
            if (dropdownBtn) {
                dropdownBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    const parent = this.parentElement;
                    parent.classList.toggle('active');
                });
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('.dropdown-content');
            if (window.innerWidth > 768) {
                dropdown.classList.remove('active');
                content.style.display = 'none';
            }
        });
    });
});




// Core 10th

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});
