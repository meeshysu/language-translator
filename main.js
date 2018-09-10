let hungarianLanguage = {
    "merry": "vidám",
    "christmas": "karácsony",
    "and": "és",
    "happy": "boldog",
    "new": "új",
    "year": "év"
};

let gaelicLanguage = {
    "merry": "nollaig",
    "christmas": "chridheil",
    "and": "agus",
    "happy": "sona",
    "new": "ùr",
    "year": "vuosi",
};

let finnishLanguage = {
    "merry": "iloinen",
    "christmas": "joulu",
    "and": "ja",
    "happy": "onnellinen",
    "new": "uusi",
    "year": "vuosi",
};



const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

let outputString = '';
const newStringBuilderLang = (language) => {
    outputString = '';
    let inputString1 = document.getElementById('inputTextArea').value.toLowerCase();
    let inputStringArray = inputString1.split(' ');
    for (let i = 0; i < inputStringArray.length; i++) {
        outputString += `${language[inputStringArray[i]]}`;
        outputString += " ";
        if (undefined === language[inputStringArray[i]]) {
            alert("This word does not exist in this dictionary. Please try again.");
        }
        printToDom(outputString, 'outputTextArea');
    }
};



let hungarianButton = document.getElementById("hungButton");
hungarianButton.addEventListener("click", function () { newStringBuilderLang(hungarianLanguage) });

let gaelicButton = document.getElementById("gaelButton");
gaelicButton.addEventListener("click", function () { newStringBuilderLang(gaelicLanguage) });

let finnishButton = document.getElementById("finnButton");
finnishButton.addEventListener("click", function () { newStringBuilderLang(finnishLanguage) });

