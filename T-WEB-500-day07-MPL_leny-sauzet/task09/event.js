const firstBtn = document.querySelector('button:nth-of-type(1)')
const parags = document.querySelectorAll('p')

firstBtn.addEventListener("click",function () {
    parags.forEach(parag => {
        parag.remove()
    })
})