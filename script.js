document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile navigation
    const navToggle = document.createElement('button');
    navToggle.textContent = 'Menu';
    navToggle.classList.add('nav-toggle');
    document.querySelector('header nav').prepend(navToggle);

    navToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('nav ul');
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Smooth scroll for "Read More" links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            const targetElement = document.querySelector(target);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
