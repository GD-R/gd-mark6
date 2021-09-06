let input_selector = document.querySelector("#input_text");
let btn_selector = document.querySelector("#btn");
let output_selector = document.querySelector("#output_text");

let url = "https://api.funtranslations.com/translate/minion.json?";

function inputText(text) {
    let encoded = encodeURI(text);
    return url + "text=" + encoded;
}

function errorHandler(error){
    console.log("There is an Error ", error);
    alert("Error Occurred please try again sometime");
}

function eventAction () {
    console.log("Clicked")
    let finalUrl = inputText(input_selector.value);
    fetch(finalUrl).then(response => response.json()).then(json => {
        let translatedTxt = json.contents.translated;
        output_selector.innerHTML = translatedTxt;
    }).catch(errorHandler);
}

btn_selector.addEventListener("click", eventAction);
