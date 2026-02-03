document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navItems = document.querySelectorAll('.nav-links li');
    const projectCards = document.querySelectorAll('.project-card');

    // Active state on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    const link = item.querySelector('a');
                    if (link && link.getAttribute('href') === '#' + sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Intersection Observer for animations
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

    // Animate elements on scroll
    document.querySelectorAll('.project-card, .about-text h3').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Project card hover effect
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Counter animation for stats
    const stats = document.querySelectorAll('.hero-stats .stat-number');
    stats.forEach(stat => {
        const target = stat.textContent;
        const hasPlus = target.includes('+');
        const hasDollar = target.includes('$');
        const hasM = target.includes('M');
        const numTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
        
        let current = 0;
        const increment = numTarget / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const counter = setInterval(() => {
            current += increment;
            if (current >= numTarget) {
                current = numTarget;
                clearInterval(counter);
            }
            
            let displayValue = current.toFixed(1);
            if (displayValue.endsWith('.0')) {
                displayValue = displayValue.replace('.0', '');
            }
            
            // Build final value with preserved symbols
            let finalValue = '';
            if (hasDollar) finalValue += '$';
            finalValue += displayValue;
            if (hasM) finalValue += 'M';
            if (hasPlus) finalValue += '+';
            
            stat.textContent = finalValue;
        }, stepTime);
    });

    // Video hover effect with custom cursor
    const video = document.getElementById('hoverVideo');
    if (video) {
        const videoContainer = video.closest('.hero-video');
        if (videoContainer) {
            videoContainer.style.cursor = 'none';
            
            // Create custom cursor element
            const cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            cursor.innerHTML = '👋';
            cursor.style.cssText = `
                position: fixed;
                pointer-events: none;
                font-size: 2rem;
                z-index: 9999;
                display: none;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(cursor);

            // Show custom cursor on hover
            videoContainer.addEventListener('mouseenter', function() {
                cursor.style.display = 'block';
            });

            // Hide custom cursor on leave
            videoContainer.addEventListener('mouseleave', function() {
                cursor.style.display = 'none';
            });

            // Follow mouse
            videoContainer.addEventListener('mousemove', function(e) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            // Pause when it finishes autoplay
            video.addEventListener('ended', function() {
                video.pause();
            });

            // Play from the beginning on click
            video.addEventListener('click', function() {
                video.currentTime = 0;
                video.play();
            });
        }
    }

    console.log('Wei Tang portfolio loaded successfully');
});
