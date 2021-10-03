// // var input1 = document.querySelector("#input1")
// // var input2 = document.querySelector("#input2")
// // var addBtn = document.querySelector("#add")
// // var subBtn = document.querySelector("#sub")
// // var mulBtn = document.querySelector("#mul")
// // var divBtn = document.querySelector("#div")


// // subBtn.addEventListener("click", subEvent)

// // function subEvent() {
// //     console.log("add")
// //     var output = Number(input1.value) - Number(input2.value) 
// //     showOutput(output)
    
// // }
// // function addEvent() {
// //     console.log("add")
// //     var output = Number(input1.value) + Number(input2.value) 
// //     showOutput(output)
// // }
// // function mulEvent() {
// //     console.log("add")
// //     var output = Number(input1.value) * Number(input2.value) 
// //     showOutput(output)
// // }
// // function divEvent() {
// //     console.log("add")
// //     var output = Number(input1.value) / Number(input2.value) 
// //     showOutput(output)
// // }



// // addBtn.addEventListener("click", addEvent)

// // mulBtn.addEventListener("click", mulEvent)

// // divBtn.addEventListener("click", divEvent)

// // function showOutput(message){
// //     outputBox.innerHTML = message
// // }


// // var inputBox1 =  document.querySelector("#textInput1")
// // var inputBox2 =  document.querySelector("#textInput1")
// // var addBtn = document.querySelector("#add")
// // var subBtn = document.querySelector("#sub")
// // var mulBtn = document.querySelector("#mul")
// // var divBtn = document.querySelector("#div")
// // var outputBox = document.querySelector("#output")

// // addBtn.addEventListener("click", plusEvent)
// // subBtn.addEventListener("click", minusEvent)
// // mulBtn.addEventListener("click", mulEvent)
// // divBtn.addEventListener("click", divEvent)
// // function plusEvent(){
// //     const sum = Number(inputBox1.value) + Number(inputBox2.value)
// //     outputBox.innerText = sum   
// // }

// // function minusEvent(){
// //     const sum = Number(inputBox1.value) - Number(inputBox2.value)
// //     outputBox.innerText = sum   
// // }

// // function mulEvent(){
// //     const sum = Number(inputBox1.value) * Number(inputBox2.value)
// //     outputBox.innerText = sum   
// // }

// // function divEvent(){
// //     const sum = Number(inputBox1.value) / Number(inputBox2.value)
// //     outputBox.innerText = sum   
// // }



// var input1 = document.querySelector("#input1")
// var input2 = document.querySelector("#input2")
// var add = document.querySelector("#add")
// var sub = document.querySelector("#sub")
// var mul = document.querySelector("#mul")
// var div = document.querySelector("#div")
// var output = document.querySelector("#output")

// add.addEventListener("click" , addRun)
// sub.addEventListener("click" , subRun)
// mul.addEventListener("click", mulRun)
// div.addEventListener("click" , divRun)

// function addRun(){
//    var result =  Number(input1.value) + Number(input2.value)
//    output.innerText = result
// }

// function subRun(){
//     var result =  Number(input1.value) - Number(input2.value)
//     output.innerText = result
//  }

//  function mulRun(){
//     var result =  Number(input1.value) * Number(input2.value)
//     output.innerText = result
//  }

//  function divRun(){
//     var result =  Number(input1.value) / Number(input2.value)
//     output.innerText = result
//  }

var add = document.querySelector("#add")
var sub = document.querySelector("#sub")
var mul = document.querySelector("#mul")
var div = document.querySelector("#div")
var input1 = document.querySelector("#input1")
var input2 = document.querySelector("#input2")
var output = document.querySelector("#output")

add.addEventListener("click" , addRun)
sub.addEventListener("click" , subRun)
mul.addEventListener("click" , mulRun)
div.addEventListener("click" , divRun)
function addRun(){
   const result = Number(input1.value) + Number(input2.value)
   output.innerText = result 

}

function subRun(){
   const result = Number(input1.value) - Number(input2.value)
   output.innerText = result

   
}

function mulRun(){
   const result = Number(input1.value) * Number(input2.value)
   output.innerText = result

   
}

function divRun(){
   const result = Number(input1.value) / Number(input2.value)
   output.innerText = result

}