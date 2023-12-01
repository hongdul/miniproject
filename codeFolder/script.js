/*
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 2) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveNav(currentSection);
    });

    function setActiveNav(currentSection) {
        const links = document.querySelectorAll('nav a');

        links.forEach(link => {
            link.classList.remove('active');
            if (link.classList.contains(currentSection)) {
                link.classList.add('active');
            }
        });
    }
});
*/