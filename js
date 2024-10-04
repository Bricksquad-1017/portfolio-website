// matrix.js

// Get the canvas element and its context
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to fill the window
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters to be displayed in the rain effect
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const fontSize = 10; // Size of the characters
const columns = Math.floor(canvas.width / fontSize); // Number of columns for the rain

const drops = Array(columns).fill(0).map(() => Math.random() * canvas.height); // Initialize drops with random starting positions

// Function to draw the characters on the canvas
function draw() {
    // Set a semi-transparent black background to create a fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Black background with slight transparency
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas

    ctx.fillStyle = '#0F0'; // Set the color for the characters (green)
    ctx.font = `${fontSize}px monospace`; // Set the font size and type

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset drop position to the top
        }

        // Increment the Y position for the drop
        drops[i]++;
    }
}

// Start the animation
setInterval(draw, 33); // Draw every 33 milliseconds

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

// Optional: Add a restart button functionality (if you have a button in your HTML)
document.getElementById('restartButton')?.addEventListener('click', () => {
    // Reset drops to random positions
    for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.random() * canvas.height; // Reset drops to random positions
    }
});