document.addEventListener('DOMContentLoaded', () => {

    const body = document.getElementsByTagName('body')[0]
    const footer = document.getElementsByTagName('footer')[0]
    const mobileMenu = document.getElementsByClassName('mobile-navbar')[0]
    const mobileMenuBtn = document.getElementsByClassName('toggle-menu-button')[0]
    
    
    const navBtns = document.querySelectorAll('.mobile-menu .navbutton a')
    console.log(navBtns)

    const toggleMobileMenu = () => {
        body.classList.toggle('blur')
        footer.classList.toggle('blur')
        mobileMenu.classList.toggle('menu-open')
        mobileMenuBtn.classList.toggle('open')
    }


    mobileMenuBtn.addEventListener('click', () => {
        toggleMobileMenu()
    })

    window.addEventListener('click', ({ target }) => {

        if ((target === body || target === footer) & body.classList.contains('blur') ) {
            toggleMobileMenu()

        }
    });

    
    //primitive, replace with mapping
    navBtns.forEach(navBtn => {
        console.log(navBtn)
        navBtn.addEventListener('click', () => {
            toggleMobileMenu()
        })
    })

});




