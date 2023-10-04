const parags = document.querySelectorAll('p')




onmousemove = (event) => {
    parags.forEach(parag=>{
        if (parag.matches(':hover')) {
            parag.classList.add("blue");
        }
    })
};

// onmousedown = (event) =>{
//     parags.forEach(parag=>{
//         if (parag.matches(':hover')) {
//             parag.classList.toggle("highlighted");
//         }
//     })
// }

parags.forEach(parag=>{
    parag.addEventListener('click',function () {
        parag.classList.toggle("highlighted");
        
    })
})