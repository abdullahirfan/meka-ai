// ===========================
// MEKA AI - Interactive JavaScript
// ===========================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check for elements in viewport
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, hsl(220, 90%, 56%) 0%, hsl(270, 70%, 60%) 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        text-align: center;
        animation: fadeInUp 0.5s ease;
    `;
    successMessage.innerHTML = `
        <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">Thank You!</h3>
        <p style="margin: 0; opacity: 0.9;">We'll get back to you soon.</p>
    `;

    document.body.appendChild(successMessage);

    // Reset form
    contactForm.reset();

    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 500);
    }, 3000);

    // Log form data (in production, this would be sent to a server)
    console.log('Form submitted:', { name, email, company, message });
});

// Add floating animation to solution icons on hover
const solutionCards = document.querySelectorAll('.solution-card');

solutionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.solution-icon');
        icon.style.animation = 'float 2s ease-in-out infinite';
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.solution-icon');
        icon.style.animation = 'none';
    });
});

// Parallax effect for hero section
// Parallax effect for hero section - Disabled to prevent overlap
// const hero = document.querySelector('.hero');
//
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxSpeed = 0.5;
//    
//     if (hero && scrolled < window.innerHeight) {
//         hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
//     }
// });

// Add cursor glow effect
const createCursorGlow = () => {
    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    glow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.display = 'block';
        glow.style.left = `${e.clientX - 150}px`;
        glow.style.top = `${e.clientY - 150}px`;
    });
};

// Initialize cursor glow on desktop only
if (window.innerWidth > 768) {
    createCursorGlow();
}

// Add particle effect to hero section
const createParticles = () => {
    const hero = document.querySelector('.hero');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
};

// Initialize particles
createParticles();

// Add intersection observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});

// Console message
console.log('%c🤖 Meka AI', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
console.log('%cTransforming Business with Agentic AI Solutions', 'font-size: 14px; color: #9333ea;');
