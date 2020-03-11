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
{
language = document.getElementById("redlanglist").value;
console.log(language);
quoteText.style.visibility = "hidden"; 
hintText.style.visibility = "hidden";
translateText.style.visibility = "hidden";
hintButton.disabled = true;
translateButton.disabled = true;
}


let niz = [
    {bs: "Neispisana tablica.", 
    lat: "Tabula rasa.", 
    hint1: "Tablica.", 
    hint2: "Tabula."},
    
    {bs: "Dok živim (dišem), nadam se.", 
    lat: "Dum spiro, spero.", 
    hint1: "Živim, nadam",
    hint2: "Dum, spero." },

    {bs:"Ne možemo svi sve.",
    lat:"Non omnia possumus omnes.",
    hint1:"Možemo, svi.",
    hint2:"Omnia, possumus."
    },

    {bs:"Ako dvoje rade isto, to (više) nije isto.",
    lat:"Si duo faciunt idem, non est idem.",
    hint1:"Dvoje, isto, nije.",
    hint2:"Fasciunt, non, idem."
    },

    {bs:"Kako posiješ, tako ćeš i žnjeti.",
    lat:"Ut sementem feceris, ita metes.",
    hint1:"Posiješ, tako, žnjeti.",
    hint2:"Sementem, metes."
    },
    {bs:"Čovjek sam, ništa ljudsko nije mi strano.",
    lat:"Homo sum: humani nihil a me alienum puto.",
    hint1:"Čovjek, ljudsko, strano.",
    hint2:"Homo, nihil, alienum."
    },
    {bs:"Najveće poštovanje duguje se djetetu.",
    lat:"Maxima reverentia, puero debetur.",
    hint1:"Najveće, duguje.",
    hint2:"Maxima, debetur."
    },
    {bs:"Umjetnost je vječna, život je kratak.",
    lat:"Ars longa, vita brevis.",
    hint1:"Umjetnost, život.",
    hint2:"Ars, vita."
    },
    {bs:"Mudrac sve svoje sa sobom nosi.",
    lat:"Sapiens omnia sua secum portat.",
    hint1:"Mudrac, nosi.",
    hint2:"Sapiens, portat."
    },

    {bs:"Riječi lete, ono što je napisano ostaje.",
    lat:"Verba volant scripta manent.",
    hint1:"Riječi, napisano.",
    hint2:"Verba, scripta."
    },
    {bs:"Učiš ribu da pliva.",
    lat:"Piscem natare doces.",
    hint1:"Ribu, učiš.",
    hint2:"Piscem, doces."
    },
    {bs:"Zatvori usta, otvori oči! (Ćuti i gledaj!)",
    lat:"Claude os, aperi oculos!",
    hint1:"Usta, oči.",
    hint2:"Claude, aperi."
    },
    {bs:"Jedna lasta ne čini proljeće.",
    lat:"Una hirundo non facit ver.",
    hint1:"Lasta, proljeće.",
    hint2:"Hirundo, facit."
    },
    {bs:"Zar i ti, sine Brute!",
    lat:"Tu quoque, Brute, mi fili!",
    hint1:"Ti, Brute.",
    hint2:"Quoque, Brute."
    },
    {bs:"Uslov bez koga je nešto nemoguće.",
    lat:"Condicio sine qua non.",
    hint1:"Uslov, nemoguće.",
    hint2:"Condicio, non."
    },
    {bs:"Što škodi, često uči.",
    lat:"Quae nocent, saepe docent.",
    hint1:"Škodi, uči.",
    hint2:"Nocent, docent."
    },
    {bs:"Pravi se prijatelj poznaje u nevolji.",
    lat:"Amicus certus in re incerta cernitur.",
    hint1:"Prijatelj, nevolja.",
    hint2:"Amicus, incerta."
    },
    {bs:"Ni Herkul (ne može) protiv dvojice.",
    lat:"Nec Hercules contra duos.",
    hint1:"Herkul, protiv.",
    hint2:"Hercules, contra."
    },
    {bs:"Pravičnost je od svega zlata skupocjenija.",
    lat:"Iustitia omnia auro carior.",
    hint1:"Pravičnost, zlata.",
    hint2:"Iustitia, auro."
    },
    {bs:"Krhka je slava bogatstva i ljepote.",
    lat:"Divitiarum et formae gloria fluxa est.",
    hint1:"Krhka, bogatstva.",
    hint2:"Divitarum, fluxa."
    },
    {bs:"Nijedno pravilo bez izuzetka.",
    lat:"Nulla regula sine exceptione.",
    hint1:"Pravilo, izuzetka.",
    hint2:"Regula, exceptione."
    },
    {bs:"Sretan će čas kucnuti kada mu se i ne nadamo.",
    lat:"Grata supervenit, quae non sperabitur hora.",
    hint1:"Sretan, kucnuti, nadamo.",
    hint2:"Supervenit, sperabitur, hora."
    },
    {bs:"Slično se sličnim liječi.",
    lat:"Similia similibus curantur.",
    hint1:"Slično, liječi.",
    hint2:"Similia, curantur."
    },
    {bs:"Najljepša stvar je pobijediti samoga sebe.",
    lat:"Se ipsum vincere, pulcherrima res est.",
    hint1:"Najljepša, pobijediti, sebe.",
    hint2:"Ipsum, vincere, pulcherrima."
    },
    {bs:"Greška u govoru. Greška u pisanju. Greška u razmišljanju. Greška u pamćenju. ",
    lat:"Lapsus linguae. Lapsus calami. Lapsus mentis. Lapsus memoriae. ",
    hint1:"Govoru, pisanju, razmišljanju, pamćenju.",
    hint2:"Linguae, calami, mentis, memoriae."
    },
    //----------------------------------------------------------->25
    
    {bs:"Voli, da bi bio voljen!",
    lat:"Ut ameris, ama!",
    hint1:"Voli, voljen.",
    hint2:"Ameris, ama."
    },
    
    {bs:"Od dva zla treba se odlučiti za manje.",
    lat:"Inter duo mala minus.",
    hint1:"Zla, manje.",
    hint2:"Mala, minus."
    },
    
    {bs:"Dvaput daje ko brzo daje.",
    lat:"Bis dat qui cito dat.",
    hint1:"Dvaput, brzo.",
    hint2:"Bis, cito."
    },
    
    {bs:"Što je plamen sjajniji, to se brže gasi.",
    lat:"Ignis quo clarior fulsit citius extinguitur.",
    hint1:"Plamen, sjajniji, gasi.",
    hint2:"Ignis, clarior, extinguitur."
    },
    
    {bs:"Što je trijeznom na srcu, to je pijanom na jeziku.",
    lat:"Quod in corde sobrii, id in lingua ebrii.",
    hint1:"Trijeznom, srcu, jeziku.",
    hint2:"Corde, sobrii, lingua."
    },
    
    {bs:"Odijelo ne čini čovjeka.",
    lat:"Habitus non facit monachum.",
    hint1:"Odijelo, čovjeka.",
    hint2:"Habitus, monachum."
    },
    
    {bs:"Prvi među jednakima.",
    lat:"Primus inter pares.",
    hint1:"Prvi, jednakima.",
    hint2:"Primus, pares."
    },
    
    {bs:"O ukusima ne vrijedi raspravljati.",
    lat:"De gustibus non est disputandum.",
    hint1:"Ukusima, raspravljati.",
    hint2:"Gustibus, disputandum."
    },
    
    {bs:"Prirodno nije sramotno.",
    lat:"Naturalia non sunt turpia.",
    hint1:"Prirodno, sramotno.",
    hint2:"Naturalia, turpia."
    },
    
    {bs:"Odmah. Smjesta.",
    lat:"Ex tempore.",
    hint1:"Odmah.",
    hint2:"Tempore."
    },
    
    {bs:"Koliko jezika znaš, toliko ljudi vrijediš.",
    lat:"Quot linguas calles, tot homines vales.",
    hint1:"Jezika, znaš, ljudi.",
    hint2:"Linguas, calles, homines."
    },
    
    {bs:"Prvi u vremenu, preči u pravu.",
    lat:"Prior tempore, potior iure.",
    hint1:"Vremenu, pravu.",
    hint2:"Tempore, iure."
    },
    
    {bs:"Željezo se kuje dok je vruće.",
    lat:"Cudendum est, dum ferrum in igne candet.",
    hint1:"Željezo, kuje, vruće.",
    hint2:"Cudendum, ferrum, candet. "
    },
    
    {bs:"Nema medicine bez latinskog jezika.",
    lat:"Non est medicina sine lingua Latina.",
    hint1:"Medicine, latinskog.",
    hint2:"Medicina, Latina."
    },
    
    {bs:"Rijetko su ljudi zadovoljnji svojom sudbinom.",
    lat:"Raro homines sorte sua contenti sunt.",
    hint1:"Rijetko, ljudi, sudbinom.",
    hint2:"Raro, homines, contenti."
    },

    {bs:"Znanje je moć.",
    lat:"Scientia est potentia.",
    hint1:"Znanje, moć.",
    hint2:"Scientia, potentia."
    },
    
    {bs:"Neznanje je majka drskosti.",
    lat:"Inscitia mater arrogantiae.",
    hint1:"Neznanje, drskosti.",
    hint2:"Inscitia, arrogantiae."
    },
    
    {bs:"Brada ne čini filozofa.",
    lat:"Barba philosophum non facit.",
    hint1:"Brada, filozofa.",
    hint2:"Barba, philosophum."
    },
    
    {bs:"Učiteljevo je da podučava, a učenikovo da uči.",
    lat:"Magistri est docere discipuli discere.",
    hint1:"Učiteljevo, podučava, učenikovo.",
    hint2:"Magistri, docere, discipuli."
    },
    
    {bs:"Ne učimo za školu, već za život.",
    lat:"Non scholae sed vitae discimus.",
    hint1:"Školu, učimo.",
    hint2:"Scholae, discimus."
    },
    
    {bs:"Ljenjivcima uvijek odmori.",
    lat:"Ignavis semper feriae.",
    hint1:"Ljenjivcima, odmori.",
    hint2:"Ignavis, feriae."
    },
    
    {bs:"Vjerni prijatelji su rijetki.",
    lat:"Amici fidi, rari.",
    hint1:"Amici, rari.",
    hint2:"Prijatelji, rijetki."
    },
    
    {bs:"Bez prijateljstva život je nikakav.",
    lat:"Sine amicitia vita nulla est.",
    hint1:"Prijateljstva, život.",
    hint2:"Amicitia, vita."
    },
    
    {bs:"O mrtvima samo dobro.",
    lat:"De mortuis nihil nisi bene.",
    hint1:"Mrtvima, dobro.",
    hint2:"Mortuis, bene."
    },
    
    {bs:"Vrijeme rane liječi.",
    lat:"Tempus vulnera sanat.",
    hint1:"Vrijeme, liječi.",
    hint2:"Tempus, sanat."
    },
    //----------------------------------------------------------->50
    {bs:"Teorija bez prakse je isto što i točak bez osovine.",
    lat:"Theoria sine praxi sicut rota sine axi.",
    hint1:"",
    hint2:""
    },
    
    
    {bs:"Ne govori pred neznalicama o stvarima koje ne razumiju.",
    lat:"Margaritas ante porcos.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Što dolikuje Jupiteru, ne dolikuje govedu.",
    lat:"Quod licet Iovi, non licet bovi.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Trbuh nema ušiju.",
    lat:"Venter cares auribus.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Slava učenikova je slava učiteljeva.",
    lat:"Gloria discipuli gloria magistri!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Svaki početak je težak.",
    lat:"Omne principium grave.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Navika je druga priroda.",
    lat:"Usus est altera natura.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Bolje vide oči nego oko.",
    lat:"Magis vident oculi quam oculus.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Bićeš ono što sam (ja), bio sam ono što si (ti).",
    lat:"Eris quod sum, eram quod es.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Što je trijeznom na srcu, to je pijanom na jeziku. (Trijezan misli što pijan govori.)",
    lat:"Quod in corde sobrii, id in lingua ebrii.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Brak bez djece je kao dan bez sunca.",
    lat:"Coniugium sine prole est quasi dies sine sole.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Žuri polako!",
    lat:"Festina lente!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Slogom rastu male stvari, neslogom se najveće raspadaju.",
    lat:"Concordia parvae res crescunt, discordia maximae dilabuntur.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Nema većeg zla od grijeha.",
    lat:"Nec est ullum magnum malum praeter culpam.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Iskoristi dan, ne vjeruj sljedećem!",
    lat:"Carpe diem, quam minimum credula postero!",
    hint1:"",
    hint2:""
    },

    {bs:"Čovjek se poznaje po svom drugu. (Skim si, takav si.)",
    lat:"Ex socio cognoscitur vir.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Hanibal je pred vratima.",
    lat:"Hannibal est ante portas.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Slatko je već i ime mir.",
    lat:"Dulce enim etiam, nomen est pacis.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Prvo skoči, pa kaži hop!",
    lat:"Ante victoriam ne canas triumphum!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Živjeti znači boriti se.",
    lat:"Vivere est militare.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Čija je zemlja njegova je i vjera.",
    lat:"Cuius regio, eius religio.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Slika je nijema pjesma.",
    lat:"Mutum est pictura poema.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Govor je slika duše.",
    lat:"Imago animi sermo est.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Ne čini drugom, što ne želiš da se tebi čini!",
    lat:"Hoc facias homini, quod cupis esse tibi.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Ne vjeruj sreći ni kad je prisutna!",
    lat:"Presenti ne credas fortunae!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Lažljivac treba da ima dobro pamćenje.",
    lat:"Mendacem memorem esse oportet.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Dok se dvojica svađaju treći se raduje.",
    lat:"Duobus litigantibus tertius gaudet.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Sličan se sličnom raduje.",
    lat:"Similis simili gaudet.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Ne uzmiči pred zlom, već mu se još hrabrije suprotstavi.",
    lat:"Tu ne cede malis sed contra audentior ito!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Bojim se čovjeka koji je pročitao jednu knjigu.",
    lat:"Timeo hominum unius libri.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Vrana vrani oči neće izvaditi.",
    lat:"Cornix cornici oculos non effodiet.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Svaka ptica svoje gnijezdo voli.",
    lat:"Omnis avis nidum suum amat.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Ko ćuti izgleda da se slaže.",
    lat:"Qui tacet consentire videtur.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Rad/ljubav sve pobjeđuje.",
    lat:"Labor/amor omnia vincit.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Bolje vide oči nego oko.",
    lat:"Magis vident oculi quam oculus.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Teško je odjednom odreći se duge ljubavi.",
    lat:"Difficile est longum subito deponere amorem.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Prava linija je najkraća, pravi put je najsigurniji.",
    lat:"Recta linea brevissima, recta via tutissima.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Slatko i časno je umrijeti za domovinu.",
    lat:"Dulce et decorum est pro patria mori.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Vjeruj, samo pazi kome vjeruješ!",
    lat:"Fide, sed cui, vide!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Najbolji prijatelj, najgori neprijatelj.",
    lat:"Optimus amicus, pessimus inimicus.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Za ovu priliku.",
    lat:"Ad hoc.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Vremena se mijenjaju, a i mi sa njima.",
    lat:"Tempora mutantur nos et mutamur in illis.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Zavadi pa vladaj!",
    lat:"Divide et impera!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Draga osoba. Nepoželjna osoba.",
    lat:"Persona grata. Persona non grata.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Svako je kovač svoje sreće.",
    lat:"Unusquisque suae fortunae faber est.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Jedan svjedok, nikakav svjedok!",
    lat:"Testis unus, testis nullus!",
    hint1:"",
    hint2:""
    },
    
    {bs:"Čist račun, duga ljubav.",
    lat:"Clara pacta, boni amici.",
    hint1:"",
    hint2:""
    },
    
    {bs:"U vinu je istina.",
    lat:"In vino veritas.",
    hint1:"",
    hint2:""
    },
    
    {bs:"U zdravom tijelu zdrav je duh.",
    lat:"Mens sana in corpore sano.",
    hint1:"",
    hint2:""
    },
    
    {bs:"Tvrd je zakon ali je zakon.",
    lat:"Dura lex sed lex.",
    hint1:" ",
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
  


