let hintButton = document.getElementById("randhintbtn");
let hintText = document.getElementById("randhinttxt");
let latinButton = document.getElementById("randlatbtn");
let latinText = document.getElementById("randlattxt");
let bosnianButton = document.getElementById("randbosbtn");
let bosnianText = document.getElementById("randbostxt");
let currentIndex;

let niz = [
    {bs: "Teorija bez prakse je isto što i točak bez osovine.", 
    lat: "Theoria sine praxi sicut rota sine axi.", 
    hint1: "Teorija,tocak,praksa" },
    
    { bs: "Što je trijeznom na srcu, to je pijanom na jeziku.", 
    lat: "Quod in corde sobrii, id in lingua ebrii.", 
    hint1: "Prevod 2" },
    
    { bs: "Neznanje je majka drskosti.",
    lat: "Inscitia mater arrogantiae",
    hint1: "Neznanje,drskosti" },


    {bs: "Slogom rastu male stvari, neslogom se najveće raspadaju.",
    lat: "Concordia parvae res crescunt, discordia maximae dilabuntur.",
    hint1: "Sloga,male stvari,najveće"}

];
  
function newQuote() {
        
currentIndex = Math.floor(Math.random() * niz.length);

latinText.innerHTML = niz[currentIndex].lat;
hintText.innerHTML = niz[currentIndex].hint1;
bosnianText.innerHTML = niz[currentIndex].bs;

hintText.style.visibility = "hidden";
bosnianText.style.visibility = "hidden";

latinButton.disabled = false;
bosnianButton.disabled = false;
}

function showHint() {
    hintText.style.visibility = "visible";}

function showBosnian() {
    bosnianText.style.visibility = "visible";}

function showLatin()
{;}
