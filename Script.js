const roles = [
    "a Medical Biller",
    "a RCM Specialist",
    "an AR Specialist",
    "an ICD-10 Coder",
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");

let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentRole = roles[index];
    if (isDeleting) {
        dynamicText.textContent = currentRole.substring(0, charIndex--);
    } else {
        dynamicText.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeText, speed);
}

typeText();



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Toggle navbar menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight active navbar link on scroll
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Adjusted for better activation
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Close the navbar menu when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

