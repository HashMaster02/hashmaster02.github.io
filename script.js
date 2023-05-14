const nav = document.querySelector('nav')


// Navbar shrinking functionality
window.addEventListener('scroll', shrinkNav)

function shrinkNav() {
    if (window.scrollY > 30) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

