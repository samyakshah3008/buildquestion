var input = document.querySelector("#input")
var red = document.querySelector("#red")
var green = document.querySelector("#green")
var blue = document.querySelector("#blue")

red.addEventListener("click" , redRun)
green.addEventListener("click", greenRun)
blue.addEventListener("click" , blueRun)

function redRun(){
    input.style.color = "red"
}

function greenRun(){
    input.style.color = "green"
}

function blueRun(){
    input.style.color = "blue"
}