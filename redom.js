let hintButton = document.getElementById("redhintbtn");
let hintText = document.getElementById("redhinttxt");
let nextButton = document.getElementById("rednextbtn");
let prevButton = document.getElementById("redprevbtn");
let quoteText = document.getElementById("redquotxt");
let translateButton = document.getElementById("redtranbtn");
let translateText = document.getElementById("redtrantxt");
let language = document.getElementById("redlanglist").value;
let currentQuote = document.getElementById("quonum");
let currentIndex = 0;

function getLanguage()
{   language = document.getElementById("redlanglist").value;
    console.log(language);
    quoteText.style.visibility = "hidden"; 
    hintText.style.visibility = "hidden";
    translateText.style.visibility = "hidden";
    hintButton.disabled = true;
    translateButton.disabled = true;
    currentQuote.style.visibility = "hidden";
}

let niz = [
    {bs: "Neispisana tablica.", 
    lat: "Tabula rasa.", 
    hint1: "Ploča.", 
    hint2: "Tabula."},
    
    {bs: "Dok živim ( dišem ), nadam se.", 
    lat: "Dum spiro, spero.", 
    hint1: "Živim,nadam",
    hint2: "Dum,spero." },

    {bs:"Ne možemo svi sve.",
    lat:"Non omnia possumus omnes.",
    hint1:"Možemo,svi.",
    hint2:"Omnia,possumus."
    },

    {bs:"Ako dvoje rade isto, to ( više ) nije isto.",
    lat:"Si duo faciunt idem, non est idem.",
    hint1:"",
    hint2:""
    },

    {bs:"Kako posiješ, tako ćeš i žnjeti.",
    lat:"Ut sementem feceris, ita metes.",
    hint1:"",
    hint2:""
    },
    {bs:"Čovjek sam, ništa ljudsko nije mi strano.",
    lat:"Homo sum: humani nihil a me alienum puto.",
    hint1:"",
    hint2:""
    },
    {bs:"Najveće poštovanje duguje se djetetu.",
    lat:"Maxima reverentia, puero debetur.",
    hint1:"",
    hint2:""
    },
    {bs:"Umjetnost je vječna, život je kratak.",
    lat:"Ars longa, vita brevis.",
    hint1:"",
    hint2:""
    },
    {bs:"Mudrac sve svoje sa sobom nosi.",
    lat:"Sapiens omnia sua secum portat.",
    hint1:"",
    hint2:""
    },

    {bs:"Riječi lete, ono što je napisano ostaje.",
    lat:"Verba volant scripta manent.",
    hint1:"",
    hint2:""
    },
    {bs:"Učiš ribu da pliva.",
    lat:"Piscem natare doces.",
    hint1:"",
    hint2:""
    },
    {bs:"Zatvori usta, otvori oči!  ( Ćuti i gledaj! )",
    lat:"Claude os, aperi oculos!",
    hint1:"",
    hint2:""
    },
    {bs:"Jedna lasta ne čini proljeće.",
    lat:"Una hirundo non facit ver.",
    hint1:"",
    hint2:""
    },
    {bs:"Zar i ti, sine Brute!",
    lat:"Tu quoque, Brute, mi fili! ili Et tu mi fili!",
    hint1:"",
    hint2:""
    },
    {bs:"Uslov bez koga je nešto nemoguće.",
    lat:"Condicio sine qua non.",
    hint1:"",
    hint2:""
    },
    {bs:"Što škodi, često uči.",
    lat:"Quae nocent, saepe docent.",
    hint1:"",
    hint2:""
    },
    {bs:"Pravi se prijatelj poznaje u nevolji.",
    lat:"Amicus certus in re incerta cernitur.",
    hint1:"",
    hint2:""
    },
    {bs:"Ni Herkul (ne može) protiv dvojice.",
    lat:"Nec Hercules contra duos.",
    hint1:"",
    hint2:""
    },
    {bs:"Pravičnost je od svega zlata skupocjenija.",
    lat:"Iustitia omnia auro carior.",
    hint1:"",
    hint2:""
    },
    {bs:"Krhka je slava bogatstva i ljepote.",
    lat:"Divitiarum et formae gloria fluxa est.",
    hint1:"",
    hint2:""
    },
    {bs:"Nijedno pravilo bez izuzetka.",
    lat:"Nulla regula sine exceptione.",
    hint1:"",
    hint2:""
    },
    {bs:"Sretan će čas kucnuti kada mu se i ne nadamo.",
    lat:"Grata supervenit, quae non sperabitur hora.",
    hint1:"",
    hint2:""
    },
    {bs:"Slično se sličnim liječi.",
    lat:"Similia similibus curantur.",
    hint1:"",
    hint2:""
    },
    {bs:"Najljepša stvar je pobijediti samoga sebe.",
    lat:"Se ipsum vincere, pulcherrima res est.",
    hint1:"",
    hint2:""
    },
    {bs:"Greška u govoru. Greška u pisanju. Greška u razmišljanju. Greška u pamćenju. ",
    lat:"Lapsus linguae. Lapsus calami. Lapsus mentis. Lapsus memoriae. ",
    hint1:"",
    hint2:""
    }
];

let nizlength = niz.length-1;
  
function nextQuote() {
        
    currentIndex = currentIndex + 1;

    if(currentIndex == nizlength+1)
    {currentIndex=0;}

    currentQuote.innerHTML = currentIndex + 1;

if (language == "BtoL")
    {hintText.innerHTML = niz[currentIndex].hint2;
    translateText.innerHTML = niz[currentIndex].lat;
    quoteText.innerHTML = niz[currentIndex].bs;}

    if (language == "LtoB")
    {quoteText.innerHTML = niz[currentIndex].lat;
    hintText.innerHTML = niz[currentIndex].hint1;
    translateText.innerHTML = niz[currentIndex].bs;}

    quoteText.style.visibility = "visible";
    currentQuote.style.visibility = "visible";
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

    currentQuote.innerHTML = currentIndex+1;

if (language == "BtoL")
    {hintText.innerHTML = niz[currentIndex].hint2;
    translateText.innerHTML = niz[currentIndex].lat;
    quoteText.innerHTML = niz[currentIndex].bs;}

    if (language == "LtoB")
    {quoteText.innerHTML = niz[currentIndex].lat;
    hintText.innerHTML = niz[currentIndex].hint1;
    translateText.innerHTML = niz[currentIndex].bs;}

    quoteText.style.visibility = "visible";
    currentQuote.style.visibility = "visible";
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


