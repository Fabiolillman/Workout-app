let frame=document.querySelector(".box")
let button=document.querySelector("button")


function createBox() {
    let Row1 = document.createElement("li")
    Row1.innerText = "1"
    let Row2 = document.createElement("li")
    Row2.innerText = "2"
    let Row3 = document.createElement("li")
    Row3.innerText = "3"
    let Row4 = document.createElement("li")
    Row4.innerText = "4"
    let Row5 = document.createElement("li")
    Row5.innerText = "5"
    let Row6 = document.createElement("li")
    Row6.innerText = "6"
    frame.appendChild(Row1) 
    frame.appendChild(Row2) 
    frame.appendChild(Row3) 
    frame.appendChild(Row4) 
    frame.appendChild(Row5) 
    frame.appendChild(Row6)  
}

button.addEventListener("click", createBox);