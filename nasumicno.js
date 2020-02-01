let hintButton = document.getElementById("randhintbtn");
let hintText = document.getElementById("randhinttxt");
let quoteButton = document.getElementById("randquobtn");
let quoteText = document.getElementById("randquotxt");
let translateButton = document.getElementById("randtranbtn");
let translateText = document.getElementById("randtrantxt");
let language = document.getElementById("randlanglist").value;
let currentIndex;

function getLanguage()
{   language = document.getElementById("randlanglist").value;
    console.log(language);
    quoteText.style.visibility = "hidden"; 
    hintText.style.visibility = "hidden";
    translateText.style.visibility = "hidden";
    hintButton.disabled = true;
    translateButton.disabled = true;
}

let niz = [
    {bs: "Teorija bez prakse je isto što i točak bez osovine.", 
    lat: "Theoria sine praxi sicut rota sine axi.", 
    hint1: "Teorija,prakse,tocak.", 
    hint2: "Theorija,praxi,rota."},
    
    { bs: "Što je trijeznom na srcu, to je pijanom na jeziku.", 
    lat: "Quod in corde sobrii, id in lingua ebrii.", 
    hint1: "Trijeznom,srcu,jeziku.",
    hint2: "Quod,corde,lingua." }
];
  
function newQuote() {
        
currentIndex = Math.floor(Math.random() * niz.length);



if (language == "BtoL")
    {hintText.innerHTML = niz[currentIndex].hint2;
    translateText.innerHTML = niz[currentIndex].lat;
    quoteText.innerHTML = niz[currentIndex].bs;}

    if (language == "LtoB")
    {quoteText.innerHTML = niz[currentIndex].lat;
    hintText.innerHTML = niz[currentIndex].hint1;
    translateText.innerHTML = niz[currentIndex].bs;}

    quoteText.style.visibility = "visible";
    hintText.style.visibility = "hidden";
    translateText.style.visibility = "hidden";

    quoteButton.disabled = false;
    translateButton.disabled = false;
    hintButton.disabled = false;
}

function showHint() {
    hintText.style.visibility = "visible";}

function showTranslate() {
    translateText.style.visibility = "visible";}


