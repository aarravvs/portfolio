// JavaScript for Dark Mode Toggle
const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Light Mode';
    } else {
        toggleThemeButton.textContent = 'Dark Mode';
    }
});

// JavaScript for Smooth Scrolling
const navbarLinks = document.querySelectorAll('#navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjusts for navbar height
            behavior: 'smooth'
        });
    });
});

// JavaScript for Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset(); // Clears the form fields after submission
});
