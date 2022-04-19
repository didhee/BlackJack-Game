let cards = []
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";

let player = {
    name: "Didi",
    chips: 100
}

// let sumEl = document.querySelector("#sum-el"); 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    playGame();
}

function playGame() {
    // sumEl.textContent += sum; another way to render the sum on the webpage.
    // cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];

    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += " " + cards[i];
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Woohoo! You've got BlackJack!";
        hasBlackJack = true;
    } else {
        message = "Oops! You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        playGame();
    }
}
