// nav toggle

const navButtonOpen = document.querySelector('.nav-open button')
const navButtonClose = document.querySelector('.nav-close button')
const nav = document.querySelector('.main-nav')

navButtonOpen.addEventListener('click', (evt) => {
    nav.classList.add('open')
})

navButtonClose.addEventListener('click', (evt) => {
    nav.classList.remove('open')
})