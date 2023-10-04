const list = document.querySelector("ul")
let arra = []

const submit = () =>{

    const inputValue = document.querySelector('#form1>input').value
    const selectValue = document.querySelector('#form1>select').value



    arra.push({inputValue,selectValue})
    render(arra)
}

const search = () => {
    const searchValue = document.querySelector('#form2 > input').value.toLowerCase();
    const searchType = document.querySelector('#form2 > select').value;

    const filteredArray = arra.filter(todo => {
        const inputValue = todo.inputValue.toLowerCase();
        const selectValue = todo.selectValue.toLowerCase();

        if (searchType === 'all') {
            return inputValue.includes(searchValue) || selectValue.includes(searchValue);
        } else if (searchType === 'note') {
            return selectValue === 'note' && inputValue.includes(searchValue);
        } else if (searchType === 'email') {
            return selectValue === 'email' && inputValue.includes(searchValue);
        } else if (searchType === 'todo') {
            return selectValue === 'todo' && inputValue.includes(searchValue);
        }
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