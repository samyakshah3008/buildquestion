var input = document.querySelector("#input")
var h1 = document.querySelector("#h1")
var h2 = document.querySelector("#h2")
var h3 = document.querySelector("#h3")
var output = document.querySelector("#output")

h1.addEventListener("click" , h1Run)
h2.addEventListener("click" , h2Run)
h3.addEventListener("click" , h3Run)

function h1Run(){
    input.style.fontSize = "32px"
}

function h2Run(){
    input.style.fontSize = "24px"
}

function h3Run(){
    input.style.fontSize = "18.72px"
}
