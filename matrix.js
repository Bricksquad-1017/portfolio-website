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
const columns = canvas.width / fontSize; // Number of columns for the rain
const drops = []; // Array to hold the Y position of each drop

// Initialize drops with random starting positions
for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height; // Random starting point for each column
}

// Function to draw the characters on the canvas
function draw() {
    // Set a semi-transparent black background to create a fading effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Black background with slight transparency
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas

    ctx.fillStyle = '#0F0'; // Set the color for the characters (green)
    ctx.font = fontSize + 'px monospace'; // Set the font size and type

    // Loop through each column to draw characters
    for (let i = 0; i < drops.length; i++) {
        // Get a random character from the characters string
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        // Draw the character at the current drop position
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset drop position to the top
        }

        // Increment the Y position for the drop
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

// Optional: Add a restart button functionality (if you have a button in your HTML)
document.getElementById('restartButton')?.addEventListener('click', () => {
    // Reset drops to random positions
    for (let i = 0; i < drops.length; i++) {
        drops[i] = Math.random() * canvas.height; // Reset drops to random positions
    }
});