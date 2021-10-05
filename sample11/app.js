var input = document.querySelector("#input")
var submit = document.querySelector("#submit")

submit.disabled = true

input.addEventListener("input" , inputRun)

function inputRun(){
    if(input.value.length >= 10 ){
        // console.log("true")
        submit.disabled = false
        input.style.color = "green"
    } else{
        console.log("false")
        submit.disabled = true
        input.style.color = "red"
    }
}