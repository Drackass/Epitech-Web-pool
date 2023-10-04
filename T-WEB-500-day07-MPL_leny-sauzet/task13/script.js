const list = document.querySelector("ul")
let arra = []

const submit = () =>{

    const inputValue = document.querySelector('#form1>input').value
    const selectValue = document.querySelector('#form1>select').value



    arra.push({inputValue,selectValue})
    render(arra)
}

const search = () => {
    const searchValue = document.querySelector('#form2 > select').value;
    const filteredArray = arra.filter(todo => {
        return todo.selectValue === searchValue;
    });
    render(filteredArray);
}

const reset = () => {
    render(arra);
}

const render = (array) =>{
    list.innerHTML = ""
    array.forEach(arr =>{
        const newDiv = document.createElement('li')
        newDiv.innerHTML = arr.inputValue
        newDiv.classList.add(arr.selectValue)
        list.appendChild(newDiv)
    })
}