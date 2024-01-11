let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');


let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;


let playGame = true;

if(playGame) {
    submit.addEventListener('click', NN);
    function NN(e) {
        e.preventDefault;
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    }
}
function validateGuess(guess) {
    // to check agar valid number dala bhi hai ya ni
    if(isNaN(guess)) {
        alert(`Please enter a valid number ${guess}`);
    }
    else if(guess < 1) {
        alert(`Please enter a valid number ${guess} < 1`);

    } else if(guess > 100) {
        alert(`Please enter a valid number ${guess} > 100`);
    } else {
        prevGuess.push(guess);
        if(numGuess == 10) {
            displayGuess(guess);
            displayMessage(`Game Over Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // agar value < = > randomg numbers uske hisab se message dena
    if(guess === randomNumber) {
        displayMessage('You Guessed it Right!')
    }
    else if(guess < randomNumber) {
        displayMessage('Number is too low');
    } else if(guess > randomNumber) {
        displayMessage('Number is too high');
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}
function displayMessage(message) {
    // seedha dom ke saath interact karega
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML ='';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}