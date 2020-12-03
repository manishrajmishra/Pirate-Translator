// button click
var translateButton = document.querySelector("#translate-button");

translateButton.addEventListener("click", buttonClickHandler)

// read input
var translateInput = document.querySelector("#translate-input");

// show output
var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/pirate.json"

function buttonClickHandler(event) {
    var input = translateInput.value;
    var finalURL = constructURL(input);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}