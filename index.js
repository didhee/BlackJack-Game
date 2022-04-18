let firstCard = 10;
let secondCard = 5;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

// let sumEl = document.querySelector("#sum-el"); 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
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
    let card = 7;
    sum += card;
    cards.push(card);
    playGame();
}
