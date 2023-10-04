const box = document.querySelector('footer>div')
box.addEventListener('click',function () {
    const name = askName()
    box.textContent = name
    alert("Hello "+name+" !")

    
})

const askName = () =>{
    let val = null
    while (val===null || val==="") {
        val = prompt("What's your name ?");  
    }

    let conf = confirm("Are you sure that "+val+" is your name ?")
    if (conf){
        return val
    }
    else{
        return askName()
    }
}