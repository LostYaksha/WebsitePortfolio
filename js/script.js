// toggle icon navbar
let menuIcons = document.querySelector('#menu-icon');
let navbarb = document.querySelector('.navbar');

menuIcons.onclick = () => {
    menuIcons.classList.toggle('bx-x');
    navbarb.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // active//
            sec.classList.add('show-animate')
        }
        else {
            sec.classList.remove('show-animate')
        }
    });
    
    // header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcons.classList.remove('bx-x');
    navbarb.classList.remove('active');

    // footer animation //
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}




