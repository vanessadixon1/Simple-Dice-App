let player1DiceImg = document.querySelector('.img1');

let player2DiceImg = document.querySelector('.img2');

let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let heading = document.querySelector('.container h1');

player1DiceImg.setAttribute('src', './images/dice' + randomNumber1 + '.png');
player2DiceImg.setAttribute('src', './images/dice' + randomNumber2 + '.png');

if(randomNumber1 < randomNumber2) {
    heading.textContent = "🚩Player 2 Won!"
} else if(randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Won! 🚩"
} else {
    heading.textContent = "Draw!"
}