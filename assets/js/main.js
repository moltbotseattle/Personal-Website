document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const projectCards = document.querySelectorAll('.project-card');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
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
    document.querySelectorAll('.project-card, .stat, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Project card hover effect
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = stat.textContent;
        const hasPlus = target.includes('+');
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
            if (hasPlus) displayValue += '+';
            if (hasM) displayValue += 'M+';
            
            stat.textContent = displayValue;
        }, stepTime);
    });

    console.log('Personal website loaded successfully');
});
