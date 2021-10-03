// // let input = document.querySelector("#input1")
// // var submit = document.querySelector("#submit")
// // submit.disabled = true
// // // submit.addEventListener("click" , submitEvent)

// // // function submitEvent(){
// // //     console.log("clicked")
// // //    var showOutput = input.length 
// // //    console.log(showOutput)
// // // }

// // input.addEventListener("input" , inputEvent)

// // function inputEvent(){
// //     if(input.value.length >= 10){
// //         console.log("true")
// //         submit.disabled = false
// //         input.style.backgroundColor = "green"

// //     } else{
// //         console.log("false")
// //         submit.disabled = true
// //         input.style.backgroundColor = "red"
// //     }
// // }

// // var inputBox = document.querySelector("#input")
// // var submitBtn = document.querySelector("#submit")
// // submitBtn.disabled = true
// // inputBox.addEventListener("input" , inputEvent)

// // function inputEvent(){
// //     if(inputBox.value.length >= 10){
// //         console.log("True")
// //         submitBtn.disabled = false
// //         inputBox.style.color = "green"
// //     } else{
// //         console.log("false")
// //         inputBox.style.color = "red"
// //         submitBtn.disabled = true
// //     }
// // }


// // var inputBox = document.querySelector("#input")
// // var submitBtn = document.querySelector("#submit")
// // submitBtn.disabled = true 

// // inputBox.addEventListener("input" , inputEvent)

// // function inputEvent(){
// //     if(inputBox.value.length >= 10){
// //         console.log("true")
// //         inputBox.style.color = "green"
// //         submitBtn.disabled = false
// //     } else{
// //         console.log("false")
// //         inputBox.style.color = "red"
// //         submitBtn.disabled = true 
// //     }
// // }


// var input = document.querySelector("#input")
// var submit = document.querySelector("#submit")
// submit.disabled = true

// input.addEventListener("input" , inputRun)

// function inputRun(){
//     if(input.value.length >= 10){
//         submit.disabled = false
//         input.style.color = "green"
//     } else{
//         submit.disabled = true
//         input.style.color = "red"
//     }
// }



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