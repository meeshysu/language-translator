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

let outputStringHung = '';
    const newStringBuilderHungLang = () => {
        let inputString1 = document.getElementById('inputTextArea');
        let inputString = inputString1.value.toLowerCase();
        let inputStringArray = inputString.split(' ');
        for (let i = 0; i < inputStringArray.length; i++) {
            outputStringHung += `${hungarianLanguage[inputStringArray[i]]}`;
        }
        printToDom(outputStringHung, 'outputTextArea');
    }


let hungarianButton = document.getElementById("hungButton");
hungarianButton.addEventListener("click", () => {
    newStringBuilderHungLang();
});