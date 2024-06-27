document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = hamburgerMenu.querySelector('i');

    hamburgerMenu.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        
        if (hamburgerMenu.classList.contains('active')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });
});
