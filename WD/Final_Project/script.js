/* script.js */

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-fill');
const observerOptions = { threshold: 0.5 };

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width;
        }
    });
}, observerOptions);

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// Navbar Active State
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-links a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}