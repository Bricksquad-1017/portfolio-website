// Function to set active link in the navbar
function setActiveLink(link) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });
    link.classList.add('active');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Blinking Title Functionality
let originalTitle = document.title;
let isBlinking = true;

function blinkTitle() {
    if (isBlinking) {
        document.title = document.title === originalTitle ? "BLINK ME" : originalTitle;
    }
}

// Start blinking the title
setInterval(blinkTitle, 1000); // Change title every second

// Typing Indicator (Optional)
const typingIndicator = document.getElementById('typingIndicator');

// Function to show typing indicator
function showTypingIndicator() {
    typingIndicator.classList.remove('hidden');
}

// Function to hide typing indicator
function hideTypingIndicator() {
    typingIndicator.classList.add('hidden');
}

// Example usage of typing indicator (you can customize this)
document.querySelector('form').addEventListener('submit', function() {
    showTypingIndicator();
    setTimeout(hideTypingIndicator, 3000); // Hide after 3 seconds (simulate typing)
});