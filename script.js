/*==================== toggle icon navbar ====================*/
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle menu
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });

    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close the menu
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
                
                // Scroll to the target section
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    // Active section highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Scroll reveal animations
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.heading', { origin: 'top' });
    ScrollReveal().reveal('.home-content, .products-category', { origin: 'bottom' });
    ScrollReveal().reveal('.home-img', { origin: 'right' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });
    ScrollReveal().reveal('.about-content', { origin: 'right' });
    ScrollReveal().reveal('.contact-info', { origin: 'left' });
    ScrollReveal().reveal('.contact form', { origin: 'right' });
});