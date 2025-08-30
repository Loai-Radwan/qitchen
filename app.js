

let menu = document.querySelector('.hidden-nav')

let menuButton = document.querySelector('.menu-icons')

let headerLinks = document.querySelectorAll('header li')

let mainLinks = document.querySelectorAll('.main li')


menuButton.addEventListener('click' , () => {
    menuButton.classList.toggle('active')
    menu.classList.toggle('show')
})

Array.from(headerLinks).forEach(link => {
    link.addEventListener('click' , () => {
        location.href = `http://loai-radwan.github.io/qitchen/${link.children[0].getAttribute('href')}`

    })
})
Array.from(mainLinks).forEach(link => {
    link.addEventListener('click' , () => {
        // link.classList.add('active')
            location.href = `http://loai-radwan.github.io/qitchen/${link.dataset.link}`
            // link.classList.remove('active')

    })
})