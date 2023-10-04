const btn = document.querySelector("button")
const input = document.getElementById("listItem")

btn.addEventListener("click",function () {
    theFunc(input.value)
})

const theFunc = (content) => {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = content
    document.body.appendChild(newDiv)
}