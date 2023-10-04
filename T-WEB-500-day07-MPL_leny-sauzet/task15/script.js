const list = document.querySelector("ul")
let arra = []

const submit = () => {
    const inputValue = document.querySelector('#inputText').value;
    const selectValue = document.querySelector('#inputType').value;
    const inputTags = document.querySelector('#inputTags').value.split(',').map(tag => tag.trim());

    arra.push({ inputValue, selectValue, tags: inputTags });
    render(arra);
}

const search = () => {
    const searchText = document.querySelector('#searchText').value.toLowerCase();
    const searchType = document.querySelector('#searchType').value;
    const searchTags = document.querySelector('#searchTags').value.split(',').map(tag => tag.trim().toLowerCase());

    const filteredArray = arra.filter(todo => {
        const inputValue = todo.inputValue.toLowerCase();
        const selectValue = todo.selectValue.toLowerCase();
        const tags = todo.tags.map(tag => tag.toLowerCase());

        const textMatch = inputValue.includes(searchText);
        const typeMatch = searchType === 'all' || selectValue === searchType;
        const tagMatch = searchTags.length === 0 || searchTags.every(tag => tags.includes(tag));

        return textMatch && typeMatch && tagMatch;
    });

    render(filteredArray);
}


const reset = () => {
    render(arra);
}

const render = (array) => {
    list.innerHTML = "";
    array.forEach(arr => {
        const newDiv = document.createElement('li');
        newDiv.innerHTML = `${arr.inputValue} (${arr.selectValue}) [Tags: ${arr.tags.join(', ')}]`;
        newDiv.classList.add(arr.selectValue);
        list.appendChild(newDiv);
    });
}
