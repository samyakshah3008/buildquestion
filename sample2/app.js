var input = document.querySelector("#input")
var increase = document.querySelector(".increase")
var decrease = document.querySelector(".decrease")

increase.addEventListener("click", increaseRun)
decrease.addEventListener("click" , decreaseRun)

function increaseRun(){
    input.style.fontSize = "18px"
}

function decreaseRun(){
    input.style.fontSize = "14px"
}
