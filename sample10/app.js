// // var url = "https://api.funtranslations.com/translate/pirate.json?text=samyak"
// // var output = document.querySelector("#message")
// // fetch(url)
// // .then(response => {
// //     console.log(response.status)
// //     if(response.status === 404){
// //         console.log("Page not found")
// //         output.innerText = "page not found simmu"  
// //     } else if(response.status === 401){
// //         console.log("You have not logged in")
// //     } else if(response.status === 200){
// //         output.innerText = "It's working perfectly"
// //         }
    
// //     else {
// //         return response.json()
        
// //     }
// // })

// var output = document.querySelector("#output")

// var url = "https://api.funtranslations.com/translate/minion.json?text=samyak"

// fetch(url)
// .then(response => {
//     if(response.status === 404) {
//         output.innerText = "Page not found"
//     } else if(response.status === 401){
//         output.innerText = "You have not logged in"
//     } else if(response.status === 200){
//         output.innerText = "It's working"
//     } else{
//         return response.json()
//     }
// })


var output = document.querySelector("#output") 

var url = "https://api.funtranslations.com/translate/minion.json?text=samyak"

fetch(url)
.then(response => {
    if(response.status === 200){
        output.innerText = "Working"
    } else if(response.status === 404){
        output.innerText = "Page not found"
    } else if(response.status === 401){
        output.innerText = "Not logged in"
    } else{
        return response.json()
    }
})
