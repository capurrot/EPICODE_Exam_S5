// CODICE CAMBIO COLORE HEADER

// Recupero gli elmenti Header e "Get started"
const header = document.querySelector("header");
const aGetStarted = document.querySelector("nav ul li button");

/*  Resto in ascolto dello scroll e se aumenta o diminuisce rispetto il valore 
370 impostato sull'asse Y allora aggiungo o tolgo la classe che cambia il colore */

window.addEventListener("scroll", () => {
  if (window.scrollY > 370) {
    header.classList.add("headerchanged");
    aGetStarted.classList.add("achanged");
  } else {
    header.classList.remove("headerchanged");
    aGetStarted.classList.remove("achanged");
  }
});

// CODICE PER ANIMAZIONE SVG M

/* Per prima cosa recupero dall'elemento svg tutti gli elementi g con opacità 1 (dopo vari esperimenti
e crash si è capito che la selezione giusta era quella :-) togliendo poi l'elemento aria-label che non
interessava e che dava problemi) */

const myArrg = document
  .querySelector("svg")
  .querySelectorAll('g[opacity="1"]:not(g[aria-label])');

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

let addInterval, removeInterval;

// Funzione per accendere una M casuale
const addMyEmme = () => {
  const myEmme = getRandomElement(myArrg);
  myEmme.style.transition = "opacity 0.4s";
  myEmme.style.opacity = 0;

  setTimeout(() => {
    myEmme.style.opacity = 1;
  }, 400);
};

/*  Funzione per spegnere una M casuale (Questa funzione è stata aggiunta perchè alla fine si riempiva 
di sole M accese. Di conseguenza per risolvere il problema ho aggiunto una funzione che le toglie. Ho scelto
fi dare una velocità maggiore a questa funzione in modo che verso i 60 secondi siano un po' diminuite le M
accese) */

const removeMyEmme = () => {
  const myEmme = getRandomElement(myArrg);
  myEmme.style.transition = "opacity 0.4s";
  myEmme.style.opacity = 1;

  setTimeout(() => {
    myEmme.style.opacity = 0;
  }, 300);
};

// Avvio degli intervalli per il comportamento normale (Funzioneranno quindi a tempi sfalsati)
const startNormalAnimation = () => {
  addInterval = setInterval(addMyEmme, 200);
  removeInterval = setInterval(removeMyEmme, 150);
};

/* Stop degli intervalli (questa funzione è necessaria perchè ho deciso di impostarne una nuova che dopo 
60 secondi ci sia un effetto snake sulle M della animazione) */
const stopNormalAnimation = () => {
  clearInterval(addInterval);
  clearInterval(removeInterval);
};

/* Effetto snake: prima spegne tutte le "M" e poi le accende 

Prima di tutto fermo le esecuzioni degli altri codici.
Poi imposto un tempo totale sia per lo spegnimento che per la riaccensione delle M.
Calcolo il tempo di spegnimento di ogni M facendo il totale dell'array * 2 volte 
(Accensione e spegnimento) e poi con un forEach imposto la opacità

*/
const snakeEffect = () => {
  stopNormalAnimation();

  const totalDuration = 10000;
  const numMs = myArrg.length;
  const snakeStep = Math.floor(totalDuration / (2 * numMs));

  // Spengo le "M" una per una
  myArrg.forEach((m, index) => {
    setTimeout(() => {
      m.style.transition = "opacity 0.4s";
      m.style.opacity = 0;
    }, index * snakeStep);
  });

  // Accendo le "M" una per una, dopo che sono tutte spente
  myArrg.forEach((m, index) => {
    setTimeout(() => {
      m.style.transition = "opacity 0.4s";
      m.style.opacity = 1;
    }, numMs * snakeStep + index * snakeStep);
  });

  // Dopo 10 secondi, ricomincio con l'animazione standard
  setTimeout(startNormalAnimation, totalDuration);
};

startNormalAnimation();
setInterval(snakeEffect, 60000);
