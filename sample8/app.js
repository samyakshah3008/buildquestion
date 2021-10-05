var output = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/miinion.json?text=samyak"

fetch(url)
.then(response => response.json())
.then(data => {
    var error =  data.error
    //  console.log(error.message) 
    output.innerText = error.message

})