/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");

const SYMBOLCARD = ["♥", "♦", "♠", "♣"];

const CARDITEM = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  creatCard();
  console.log(creatCard);
};

function creatCard() {
  let card = document.createElement("div");

  card.classList.add("card");
  BODY.append(card);

  let top = document.createElement("header");
  top.classList.add("top");
  top.innerHTML = randomSFinal;
  card.append(top);

  let main = document.createElement("div");
  main.classList.add("main");
  main.innerHTML = randomNFinal;
  card.append(main);

  let down = document.createElement("footer");
  down.classList.add("down");
  down.innerHTML = randomSFinal;
  card.append(down);

  let cardColor = document.querySelector(".card");
  console.log(randomSFinal);
  if (randomSFinal == "♠" || randomSFinal == "♣") {
    cardColor.style.color = "black";
  } else {
    cardColor.style.color = "red";
  }
}

function finalElement(simbol) {
  let PrintItem = simbol[randomNum(simbol)];
  return PrintItem;
}

function randomNum(list) {
  let randomized = Math.floor(Math.random() * list.length);
  return randomized;
}

let randomSFinal = finalElement(SYMBOLCARD);
let randomNFinal = finalElement(CARDITEM);
