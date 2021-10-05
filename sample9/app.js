var output = document.querySelector("#output") 

var url = "https://api.funtranslations.com/translate/miinion.json?text=samyak"

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

