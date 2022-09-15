document.addEventListener('DOMContentLoaded', () => {


    const html = document.getElementsByTagName('html')[0]
    const body = document.getElementsByTagName('body')[0]
    const footer = document.getElementsByTagName('footer')[0]
    const mobileMenu = document.getElementsByClassName('mobile-navbar')[0]
    const mobileMenuBtn = document.getElementsByClassName('toggle-menu-button')[0]    
    const navBtns = document.querySelectorAll('.mobile-menu .navbutton a')
    const careerListItems = document.querySelectorAll('#career li')


    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                if (entry.target.id === 'email_button') {
                    entry.target.classList.add('bounce-in-top')
                } else if (entry.target.tagName === 'LI') {
                    entry.target.classList.add('bounce-in-top')
                } else {
                    entry.target.classList.add('focus-in-expand')
                }
            }
        });
    });

    observer.observe(document.querySelector('#about'));
    observer.observe(document.querySelector('#contact .button'));
    careerListItems.forEach(li => {
        observer.observe(li)
    })
    


    const toggleMobileMenu = () => {
        body.classList.toggle('blur')
        footer.classList.toggle('blur')
        mobileMenu.classList.toggle('menu-open')
        mobileMenuBtn.classList.toggle('open')
    }


    mobileMenuBtn.addEventListener('click', () => {
        toggleMobileMenu()
    })

    window.addEventListener('click', ({target}) => {
        if ((target === html || target === body || target === footer) & body.classList.contains('blur') ) {
            toggleMobileMenu()
        }
    });

    
    navBtns.forEach(navBtn => {
        navBtn.addEventListener('click', () => {
            toggleMobileMenu()
        })
    })

});




