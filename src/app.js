import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomNumber());
  document.querySelector(".card").innerHTML = generateRandomSuit();
};

let generateRandomNumber = () => {
  let numbers = [
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
  let inexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spades", "heart", "club"];
  let inexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
