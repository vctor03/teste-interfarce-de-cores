const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const caixaDeCores = document.getElementById("caixa-de-cores");

function mudarCor(color) {
  caixaDeCores.style.background = color;
}
alert("Seja bem-vindo ( a )");
button1.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(65,41,41,1) 32%, rgba(75,47,47,1) 39%, rgba(184,66,66,1) 72%)"
  );
});
button2.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(42,41,65,1) 32%, rgba(49,47,75,1) 39%, rgba(66,70,184,1) 72%)"
  );
});
button3.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(41,65,44,1) 32%, rgba(47,75,47,1) 39%, rgba(82,184,66,1) 72%)"
  );
});
button4.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(74,43,72,1) 32%, rgba(84,51,85,1) 39%, rgba(184,66,181,1) 72%)"
  );
});
button5.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(73,74,43,1) 32%, rgba(84,85,51,1) 39%, rgba(196,193,65,1) 72%)"
  );
});
button6.addEventListener("mouseover", () => {
  mudarCor(
    " linear-gradient(0deg, rgba(41,65,65,1) 32%, rgba(47,74,75,1) 39%, rgba(66,184,179,1) 72%)"
  );
});
button7.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(74,66,43,1) 32%, rgba(85,75,51,1) 39%, rgba(196,142,65,1) 72%)"
  );
});
button8.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(74,43,70,1) 32%, rgba(85,51,79,1) 39%, rgba(142,65,196,1) 72%)"
  );
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".caixa", { duration: 6500 });
