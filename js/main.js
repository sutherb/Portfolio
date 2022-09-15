document.addEventListener('DOMContentLoaded', () => {

    const body = document.getElementsByTagName('body')[0]
    const mobileMenu = document.getElementsByClassName('mobile-navbar')[0]
    const mobileMenuBtn = document.getElementsByClassName('toggle-menu-button')[0]
    
    
    const navBtns = document.getElementById("mobile-menu-list").getElementsByClassName('navbutton')

    const toggleMobileMenu = () => {
        body.classList.toggle('blur')
        mobileMenu.classList.toggle('menu-open')
        mobileMenuBtn.classList.toggle('open')
    }


    mobileMenuBtn.addEventListener('click', () => {
        toggleMobileMenu()
    })

    
    //primitive, replace with mapping
    for (let i = 0; i <= navBtns.length; i++) {
        navBtns[i].addEventListener('click', () => {
            toggleMobileMenu()
        })
    }

    

});




