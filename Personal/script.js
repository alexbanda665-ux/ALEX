// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic year in footer
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Alex Banda. All rights reserved.`;

// Dark mode toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Simple welcome message
window.onload = () => {
    console.log("Welcome to Alex Banda's Programmer Portfolio 🚀");
};
// Dynamic Projects List
const projectsList = document.getElementById("projects-list");

if (projectsList) {
    const projects = [
        {
            title: "Student Management System",
            description: "Java-based system for managing student records.",
            link: "#"
        },
        {
            title: "Personal Portfolio Website",
            description: "Responsive website built using HTML, CSS & JS.",
            link: "#"
        },
        {
            title: "Library Management System",
            description: "Python & MySQL app for library operations.",
            link: "#"
        }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsList.appendChild(projectDiv);
    });
}
// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert("Please fill in all fields!");
        }
    });
}
// =====================
// GITHUB PROJECTS FETCH
// =====================
const projectlist = document.getElementById("projects-list");

// 🔴 CHANGE THIS to your GitHub username
const githubUsername = "alexbanda";

if (projectsList) {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(repos => {
            projectsList.innerHTML = "";
            repos.slice(0, 6).forEach(repo => {
                const project = document.createElement("div");
                project.classList.add("project");

                project.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description provided."}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;

                projectsList.appendChild(project);
            });
        })
        .catch(error => {
            projectsList.innerHTML = "<p>Failed to load projects.</p>";
            console.error(error);
        });
}