const list = document.querySelector("ul")
const submit = () =>{
    const newDiv = document.createElement('li')
    newDiv.innerHTML = document.querySelector('input').value
    newDiv.classList.add(document.querySelector('select').value)
    list.appendChild(newDiv)
}