/**
 * main.js - FramePack.work Website Main Script
 * Provides common functionality and interface interactions
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initializeApp();
});

// Initialize all functions
function initializeApp() {
    // Update status bar time
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // Update time every minute
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Change navbar style on scroll
    setupScrollNavbar();

    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();

    // Set default language to English for index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        currentLanguage = 'en';
        updateLanguage('en');
    } else {
        // Load saved language preference for other pages
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage) {
            updateLanguage(savedLanguage);
        }
    }

    // Add language switch event listener
    const languageSwitch = document.getElementById('languageSwitch');
    if (languageSwitch) {
        languageSwitch.addEventListener('click', function() {
            const newLang = currentLanguage === 'en' ? 'ja' : 'en';
            updateLanguage(newLang);
        });
    }
}

// Get time and display in status bar
function updateStatusBarTime() {
    const timeElements = document.querySelectorAll('.status-bar-time');
    if (timeElements.length === 0) return;

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format
    
    const timeString = `${hours}:${minutes} ${ampm}`;
    
    timeElements.forEach(element => {
        element.textContent = timeString;
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (!menuToggle || !navbarNav) return;
    
    menuToggle.addEventListener('click', () => {
        navbarNav.classList.toggle('show');
        navbarNav.classList.toggle('d-none');
        navbarNav.classList.toggle('d-flex');
    });
    
    // Close menu after clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navbarNav.classList.remove('show');
                navbarNav.classList.add('d-none');
                navbarNav.classList.remove('d-flex');
            }
        });
    });
}

// Change navbar style on scroll
function setupScrollNavbar() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Smooth scroll to anchor
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.navbar-nav a, .cta-button, .start-now-btn, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only process internal links
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    scrollToElement(targetElement);
                }
            }
        });
    });
}

function scrollToElement(element) {
    window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 80 // Subtract navbar height
    });
}

// Dynamic content loading
function loadContent(url, targetElement) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            targetElement.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content:', error);
            targetElement.innerHTML = '<p class="error-message">Content loading failed. Please try again later.</p>';
        });
}

let currentLanguage = 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update language switch button text
    const languageSwitch = document.getElementById('languageSwitch');
    if (languageSwitch) {
        languageSwitch.innerHTML = `<i data-lucide="globe"></i> ${translations[lang].switchToJapanese}`;
        lucide.createIcons();
    }

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

function playVideo(videoElement) {
    if (videoElement) {
        try {
            videoElement.play().catch(error => {
                console.error('Error playing video:', error);
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = translations[currentLanguage].videoPlayer.error;
                videoElement.parentNode.appendChild(errorMessage);
            });
        } catch (error) {
            console.error('Error playing video:', error);
        }
    }
} 
