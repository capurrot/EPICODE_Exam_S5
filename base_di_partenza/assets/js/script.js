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

//CODICE PER ANIMAZIONE SVG

/* Assegno ad una variabile i valori presenti nella Query Select All della proprietà
opacity dell'svg. */

const myArrg = document.querySelector("svg").querySelectorAll("g[opacity]");

/* A questo punto creo una funzione che in maniera casuale sceglie le lettere M da accendere e
anche quelle da spegnere per dare l'effetto del cambiamento delle M 

Ho poi fatto un aggiunta per evitare che ci siano sempre più M piene che vuote effettuando lo
stesso codice anche spegnendo altre M

*/

const changeMyEmme = () => {
  const myEmme0 = myArrg[Math.floor(Math.random() * myArrg.length)];
  const myEmme1 = myArrg[Math.floor(Math.random() * myArrg.length)];

  myEmme0.style.transition = "opacity 0.4s"; // Aggiungo una transizione fluida per l'opacità
  myEmme1.style.transition = "opacity 0.4s"; // Aggiungo una transizione fluida per l'opacità

  myEmme0.style.opacity = 0; // Imposto l'opacità a 0
  myEmme1.style.opacity = 1; // Imposto l'opacità a 0

  setTimeout(() => {
    myEmme0.style.opacity = 1;
  }, 300);
  setTimeout(() => {
    myEmme1.style.opacity = 0;
  }, 300);
};

setInterval(changeMyEmme, 150);
