

let menu = document.querySelector('.hidden-nav')

let menuButton = document.querySelector('.menu-icons')

let menuSection = document.querySelector('.menu .menu-section')

let makiFood = document.getElementById('maki')
let uramakiFood = document.getElementById('uramaki')
let specialFood = document.getElementById('special')

let copyRight = document.querySelector('footer p span')

copyRight.innerHTML = new Date().getFullYear()



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

let foodHttp = new XMLHttpRequest()
foodHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let food = JSON.parse(foodHttp.responseText)

        food.maki.forEach(maki => {
            let box = document.createElement('div')
            box.classList.add('food-box')
            let img = document.createElement('img')
            img.setAttribute('src',maki.image)
            img.setAttribute('alt' , maki.alt)

            let text = document.createElement('div')
            text.classList.add('text')
            
            let heading = document.createElement('h4')
            heading.innerHTML = `<span>${maki.title} </span>  <span> ${maki.price} </span>  `

            let description = document.createElement('p')
            description.textContent = maki.description

            text.appendChild(heading)
            text.appendChild(description)

            box.appendChild(img)
            box.appendChild(text)

            makiFood.appendChild(box)
        })
        food.uramaki.forEach(uramaki => {
            let box = document.createElement('div')
            box.classList.add('food-box')
            let img = document.createElement('img')
            img.setAttribute('src',uramaki.image)
            img.setAttribute('alt' , uramaki.alt)

            let text = document.createElement('div')
            text.classList.add('text')
            
            let heading = document.createElement('h4')
            heading.innerHTML = `<span>${uramaki.title} </span>  <span> ${uramaki.price} </span>  `

            let description = document.createElement('p')
            description.textContent = uramaki.description

            text.appendChild(heading)
            text.appendChild(description)

            box.appendChild(img)
            box.appendChild(text)

            uramakiFood.appendChild(box)
        })
        food.special.forEach(special => {
            let box = document.createElement('div')
            box.classList.add('food-box')
            let img = document.createElement('img')
            img.setAttribute('src',special.image)
            img.setAttribute('alt' , special.alt)

            let text = document.createElement('div')
            text.classList.add('text')
            
            let heading = document.createElement('h4')
            heading.innerHTML = `<span>${special.title} </span>  <span> ${special.price} </span>  `

            let description = document.createElement('p')
            description.textContent = special.description

            text.appendChild(heading)
            text.appendChild(description)

            box.appendChild(img)
            box.appendChild(text)

            specialFood.appendChild(box)
        })


    }
};
foodHttp.open('GET' , 'js/data.json' , true)
foodHttp.send()


console.log(menuSection)

