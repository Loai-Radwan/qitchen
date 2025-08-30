

let menu = document.querySelector('.hidden-nav')

let menuButton = document.querySelector('.menu-icons')



let mainLinks = document.querySelectorAll('.main li')


menuButton.addEventListener('click' , () => {
    menuButton.classList.toggle('active')
    menu.classList.toggle('show')
})


Array.from(mainLinks).forEach(link => {
    link.addEventListener('click' , () => {
        // link.classList.add('active')
            location.href = `https://loai-radwan.github.io/qitchen/${link.dataset.link}`
            console.log(link.dataset.link)
            // link.classList.remove('active')

    })
})