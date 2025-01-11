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

tmpArr = [];
const myArrg = document.querySelector("svg").querySelectorAll("g[opacity]");
const changeMyEmme = () => {
  let myEmme = myArrg[Math.floor(Math.random() * myArrg.length)];
  myEmme.setAttribute("opacity", 0);
  setInterval(() => {
    myEmme.setAttribute("opacity", 1);
  }, 400);
};
setInterval(changeMyEmme, 200);
