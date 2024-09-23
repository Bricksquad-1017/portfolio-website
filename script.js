/**
 * Function name
 * 
 * @param {any} params - The parameters for the function.
 */
function name(params) {
    // script.js



// Smooth Scrolling
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
}

// Dynamic Content Loading
function loadProjects() {
    const projects = [
        { title: 'Project 1', description: 'Description of project 1', image: 'assets/images/project1.jpg' },
        { title: 'Project 2', description: 'Description of project 2', image: 'assets/images/project2.jpg' },
        { title: 'Project 3', description: 'Description of project 3', image: 'assets/images/project3.jpg' },
    ];

    const projectsContainer = document.getElementById('projects-container');

    if (projectsContainer) {
        projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <img src="${project.image}" alt="${project.title}" class="portfolio-image">
            `;
            projectsContainer.appendChild(projectDiv);
        });
    }
// Form Validation
function validateForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                e.preventDefault(); // Prevent form submission
                alert('Please fill in all fields.');
            }
        }
        
        }
            });
        }

// Initialize Functions
function init() {
    smoothScroll();
    loadProjects();
    validateForm();
}

// Call the init function to initialize functionalities
document.addEventListener('DOMContentLoaded', init);