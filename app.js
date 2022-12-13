const btn1 = document.querySelector('.btn1')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const hiddin = document.querySelector('hiddin')
const cloes = document.querySelector('#cloes')
const menu_right = document.querySelector('.menu-right')
const menu_close = document.querySelector('#menu-close')
const menu = document.querySelector('.menu')

btn1.addEventListener("click", () => {
    overlay.classList.remove("hiddin")
    modal.setAttribute('style', 'transform: translate(-50%, -50%)')
})
cloes.addEventListener("click", () => {
    overlay.classList.add("hiddin")
    modal.setAttribute('style', 'transform: translate(-50%, -500%)')
})
menu.addEventListener("click", () => {
    overlay.classList.remove("hiddin")
    menu_right.classList.remove("hiddin")
})
menu_close.addEventListener("click", () => {
    overlay.classList.add("hiddin")
    menu_right.classList.add("hiddin")
})