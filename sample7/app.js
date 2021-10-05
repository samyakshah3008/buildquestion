var url = "https://api.funtranslations.com/translate/minion.json?text=Hi I am Samyak Sunilkumar Shah"

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data.contents.translated)
})