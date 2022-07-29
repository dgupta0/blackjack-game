
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el")
let sum = 0;
let playMessage = document.getElementById("play-message")
let hasBlackjack = false;
let isAlive = true;
let cardArr = []


function renderRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    if (number > 10) {
        return 10;
    } else if (number === 1) {
        number === 11;
        return number;
    }
    else {
        return number;
    }

}

function start() {
    isAlive = true;
    hasBlackjack = false;
    let firstCard = renderRandomCard();
    let secondCard = renderRandomCard();
    cardArr = [firstCard, secondCard]
    sum = cardArr[0] + cardArr[1];
    sumEl.innerText = "Sum: " + sum;
    collectCards();
    render();

}
function collectCards() {
    cardsEl.innerText = "Cards:";
    sum = 0;
    for (let i = 0; i < cardArr.length; i++) {
        sum += cardArr[i];
        cardsEl.innerText += " " + cardArr[i] + " ";
    }

}

function render() {
    if (sum > 21) {
        playMessage.innerText = "You are out of the game";
        isAlive = false;
    }
    else if (sum === 21) {
        playMessage.innerText = "You have a blackjack";
        hasBlackjack = true;
    }
    else {
        playMessage.innerText = "Do you want to draw another card?"
    }
}
function newDraw() {
    if (hasBlackjack === false && isAlive === true) {
        let newCard = renderRandomCard();
        cardArr.push(newCard);
        collectCards();
        sumEl.innerText = " Sum: " + sum;
        render();
    }
}