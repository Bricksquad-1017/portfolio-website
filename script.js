// matrix.js

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const fontSize = 10;
const columns = canvas.width / fontSize; // Number of columns for the rain
const drops = [];

// Initialize drops
for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height; // Random starting point
}

// Draw the characters
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Black background with slight transparency
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green color for the characters
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Increment Y coordinate for the drop
        drops[i]++;
    }
}

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

// Start the animation
setInterval(draw, 33); // Draw every 33 milliseconds
document.getElementById('restartButton').addEventListener('click', () => {
    // Reset drops or any other logic to restart the animation
    for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.random() * canvas.height; // Reset drops to random positions
    }
});