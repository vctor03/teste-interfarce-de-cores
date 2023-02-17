const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");
const button6 = document.getElementById("button-6");
const button7 = document.getElementById("button-7");
const button8 = document.getElementById("button-8");
const caixaDeCores = document.getElementById("caixa-de-cores");
const themeWhite = document.getElementById("themewhite");
const themeBtn = document.getElementById("themebtn");

function mudarCor(color) {
  caixaDeCores.style.background = color;
}
alert("Seja bem-vindo ( a )");
button1.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(190,67,67,1) 32%, rgba(190,58,58,1) 39%, rgba(255,98,98,1) 72%)"
  );
});
button2.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(67,72,190,1) 32%, rgba(58,68,190,1) 39%, rgba(98,131,255,1) 72%)"
  );
});
button3.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(72,190,67,1) 32%, rgba(58,190,73,1) 39%, rgba(98,255,144,1) 72%)"
  );
});
button4.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(190,67,184,1) 32%, rgba(190,58,188,1) 39%, rgba(255,98,255,1) 72%)"
  );
});
button5.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(190,188,67,1) 32%, rgba(190,186,58,1) 39%, rgba(252,255,98,1) 72%)"
  );
});
button6.addEventListener("mouseover", () => {
  mudarCor(
    " linear-gradient(0deg, rgba(67,190,190,1) 32%, rgba(58,188,190,1) 39%, rgba(98,252,255,1) 72%)"
  );
});
button7.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(190,139,67,1) 32%, rgba(190,133,58,1) 39%, rgba(255,187,98,1) 72%)"
  );
});
button8.addEventListener("mouseover", () => {
  mudarCor(
    "linear-gradient(0deg, rgba(165,67,190,1) 32%, rgba(164,58,190,1) 39%, rgba(197,98,255,1) 72%)"
  );
});
caixaDeCores.addEventListener("click", () => {
  caixaDeCores.style.background = "";
});

window.sr = ScrollReveal({ reset: true });
sr.reveal(".caixa", { duration: 5000 });

themeBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("themewhite")) {
    document.documentElement.classList.remove("themewhite");
  } else {
    document.documentElement.classList.add("themewhite");
  }
});
