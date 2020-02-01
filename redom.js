let hintButton = document.getElementById("redhintbtn");
let hintText = document.getElementById("redhinttxt");
let nextButton = document.getElementById("rednextbtn");
let prevButton = document.getElementById("redprevbtn");
let quoteText = document.getElementById("redquotxt");
let translateButton = document.getElementById("redtranbtn");
let translateText = document.getElementById("redtrantxt");
let language = document.getElementById("redlanglist").value;
let currentIndex = 0;


function getLanguage()
{   language = document.getElementById("redlanglist").value;
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

let nizlength = niz.length-1;
  
function nextQuote() {
        
    currentIndex = currentIndex + 1;

    if(currentIndex == nizlength+1)
    {currentIndex=0;}

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

    nextButton.disabled = false;
    prevButton.disabled = false;
    translateButton.disabled = false;
    hintButton.disabled = false;
}

function prevQuote() {
        
    currentIndex = currentIndex - 1;

    if(currentIndex == -1)
    {currentIndex=nizlength;}

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

    nextButton.disabled = false;
    prevButton.disabled = false;
    translateButton.disabled = false;
    hintButton.disabled = false;
}
function showHint() {
    hintText.style.visibility = "visible";}

function showTranslate() {
    translateText.style.visibility = "visible";}


