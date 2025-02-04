// Terminal text animation
const terminalText = document.querySelector('.terminal-text');
const cursor = document.querySelector('.cursor');
const lines = [
    '> Loading portfolio...',
    '> const developer = {',
    '    name: "Nicole Paige Manik",',
    '    role: "Software Engineering Specialist",',
    '    skills: ["JavaScript", "Python", "Java", "C#"],',
    '    passion: "Building innovative solutions",',
    '    status: "Ready to create amazing things"',
    '  };',
    '> console.log("Welcome to my portfolio! 👋");'
];

let lineIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeText() {
    if (lineIndex < lines.length) {
        // Type current line
        if (charIndex < lines[lineIndex].length) {
            terminalText.textContent += lines[lineIndex][charIndex];
            charIndex++;
            setTimeout(typeText, Math.random() * 50 + 30); // Random delay for realistic typing
        } else {
            // Line completed
            terminalText.textContent += '\n';
            lineIndex++;
            charIndex = 0;
            setTimeout(typeText, 500); // Delay before starting next line
        }
    }
}

// Start typing animation
setTimeout(typeText, 1000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Add some offset to make the highlighting more natural
        if (scrollY >= (sectionTop - 60)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Skill tag hover animation
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Intersection Observer for fade-in animations
// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for fade-in
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');  // Add fade-in class immediately
    observer.observe(section);
});

// Add fade-in animation to project cards with initial visibility
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '1';  // Make cards visible by default
    card.style.transition = `transform 0.3s ease-in-out`;
    observer.observe(card);
});

// Initialize fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
});

document.addEventListener('DOMContentLoaded', () => {
    const text = "Specialising in Software Engineering";
    const typingText = document.querySelector('.typing-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, Math.random() * 50 + 50); // Random delay between 50-100ms for more natural typing
        }
    }

    // Start typing animation after a short delay
    setTimeout(type, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});