
const languageTranslator = {
    hungarian: [
        {eng: "merry", hung: "vidám"},
        {eng: "christmas", hung: "karácsony"},
        {eng: "and", hung: "és"},
        {eng: "happy", hung: "boldog"},
        {eng: "new", hung: "új"},
        {eng: "year", hung: "év"}
    ],
    gaelic: [
        {eng: "merry", gael: "nollaig"},
        {eng: "christmas", gael: "chridheil"},
        {eng: "and", gael: "agus"},
        {eng: "happy", gael: "sona"},
        {eng: "new", gael: "ùr"},
        {eng: "year", gael: "bliadhna"}
    ],
    finnish: [
        {eng: "merry", finn: "iloinen"},
        {eng: "christmas", finn: "joulu"},
        {eng: "and", finn: "ja"},
        {eng: "happy", finn: "onnellinen"},
        {eng: "new", finn: "uusi"},
        {eng: "year", finn: "vuosi"}
    ],
};


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};
const languageTextArea = document.getElementById('languageTextArea');


const hungarianArray = () => {
    for (i = 0; i < languageTranslator.hungarian.length; i++){
    if (languageTranslator.hungarian[i].eng === languageTextArea.value) {
        printToDom(languageTranslator.hungarian[i].hung, 'text')
    };
};
};


// const buttonElement = document.getElementById('hungarianButton');
// buttonElement.addEventListener('click', hungarianArray (event));
