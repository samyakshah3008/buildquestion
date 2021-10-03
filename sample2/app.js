// // var inputText = document.querySelector("#input")
// // var addBtn = document.querySelector("#add")
// // var subBtn = document.querySelector("#sub")



// // addBtn.addEventListener("click" , addEvent)
// // subBtn.addEventListener("click" , subEvent)


// // function addEvent(){
// //     console.log("clicked")


// //    inputText.style.fontSize = "18px"
    

   
// // }

// // function subEvent(){
// //     console.log("clicked")
// //     inputText.style.fontSize = "14px"
// // }

// var input = document.querySelector("#input")
// var inc = document.querySelector("#inc")
// var dec = document.querySelector("#dec")

// inc.addEventListener("click" , incRun)
// dec.addEventListener("click" , decRun)

// function incRun(){
//    input.style.fontSize = "18px"
// }

// function decRun(){
//     input.style.fontSize = "14px"
// }

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
