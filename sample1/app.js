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