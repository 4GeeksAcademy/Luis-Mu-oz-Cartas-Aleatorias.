import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    const suits = ['heart', 'diamond', 'club', 'spade'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const card = document.querySelector('.card');
    const topLeft = document.querySelector('.top-left');
    const middle = document.querySelector('.middle');
    const bottomRight = document.querySelector('.bottom-right');

    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);

    const suit = suits[randomSuitIndex];
    const value = values[randomValueIndex];
    const suitSymbol = getSuitSymbol(suit);

    
    card.className = 'card ' + suit;

    
    topLeft.textContent = value + ' ' + suitSymbol;
    middle.textContent = suitSymbol;
    bottomRight.textContent = value + ' ' + suitSymbol;

    function getSuitSymbol(suitName) {
        switch (suitName) {
            case 'heart':
                return '♥';
            case 'diamond':
                return '♦';
            case 'club':
                return '♣';
            case 'spade':
                return '♠';
            default:
                return '';
        }
    }
};