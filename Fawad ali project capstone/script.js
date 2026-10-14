// 1. Projects Array (Industry standard way to store data)
const myProjects = [
    {
        title: "The Secret Vault",
        description: "A secure notes application utilizing Browser Local Storage for data persistence.",
        tech: "JS Local Storage"
    },
    {
        title: "Goal Fund Tracker",
        description: "A financial tracking tool calculating logic and saving states.",
        tech: "JS Math & DOM"
    },
    {
        title: "Live Digital Clock",
        description: "A real-time clock built with JS Date Object and setInterval.",
        tech: "JavaScript Timers"
    }
];

// HTML se project grid ko pakro
const projectGrid = document.querySelector('.project-grid');

// 2. Loop chala kar automatically cards banao
myProjects.forEach(function (project) {
    // Ek naya dabba banao
    let card = document.createElement('div');

    // JS se direct CSS styling (Card design)
    card.style.backgroundColor = '#2a2a2a';
    card.style.padding = '25px';
    card.style.borderRadius = '10px';
    card.style.transition = '0.3s';

    // Dabbe ke andar ka HTML
    card.innerHTML = `
        <h3 style="color: #dd830d; margin-bottom: 10px; font-size: 22px;">${project.title}</h3>
        <p style="color: #aaaaaa; margin-bottom: 20px;">${project.description}</p>
        <span style="background-color: #1e90ff; padding: 5px 12px; border-radius: 5px; font-size: 14px; font-weight: bold;">${project.tech}</span>
    `;

    // Grid mein card ko chipka do
    projectGrid.appendChild(card);
});

// 3. Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    // Form submit hone par page ko refresh hone se roko
    event.preventDefault();

    // Fake success message
    alert("Message Sent! Thank you for reaching out, I will get back to you soon.");

    // Form ko wapas khali kar do
    contactForm.reset();
});