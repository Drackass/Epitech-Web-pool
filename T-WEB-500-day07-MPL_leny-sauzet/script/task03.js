const box = document.querySelector('footer>div')
let lastChar = ""

addEventListener("keypress", (event) => {
    if (lastChar.length<42) {
        lastChar+=event.key
    }
    box.textContent = lastChar
});

