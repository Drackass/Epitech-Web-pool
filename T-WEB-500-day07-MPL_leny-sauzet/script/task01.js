const box = document.querySelector('footer>div')
let counter = 0
box.addEventListener('click',function () {
    counter++
    box.textContent = counter
})