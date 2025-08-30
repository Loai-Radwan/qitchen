

let menu = document.querySelector('.hidden-nav')

let menuButton = document.querySelector('.menu-icons')

let headerLinks = document.querySelectorAll('header li')


menuButton.addEventListener('click' , () => {
    menuButton.classList.toggle('active')
    menu.classList.toggle('show')
})

Array.from(headerLinks).forEach(link => {
    link.addEventListener('click' , () => {
        location.pathname = link.children[0].getAttribute('href')
        console.log(location)
        })
})