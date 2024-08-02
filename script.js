// script.js
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['Software Engineer', 'Web Developer', 'Video Editor'],
        typeSpeed: 60,
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navUl.classList.remove('show');
        });
    });
});
