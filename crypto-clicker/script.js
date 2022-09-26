import { animatePlayer, animateShop } from '/animations.js';
import { walk } from '/walk.js';
import { hidePrice, showPrice } from '/infoTabs.js';
import { buyDogeCave, buyEthCave, buyBtcCave } from '/buyCaves.js';
import { mineDoge, mineEth, mineBtc } from '/mineTokens.js';
import { addBuySellFunc } from '/tradeMenuFuncs.js';
import { tutorial } from '/tutorial.js';
import { offer } from '/elonsOffer.js'; 

//local storage
localStorage.setItem('multiplier', 1);
localStorage.setItem('tutorialPassed', 'no');
localStorage.setItem('walked','no');
localStorage.setItem('readyForHover','no');
localStorage.setItem('readyForBuy', 'no');
localStorage.setItem('tradeMenuOpen', 'no');

//tutorial
if(localStorage.getItem('tutorialPassed') == 'no'){
    setTimeout(()=>{
        animateShop();
        animatePlayer();
        addBuySellFunc();
        walk();
        tutorial();
    },1500);
}

//elon musks offer
setInterval(()=>{
    offer()
}, randomNumber(120000, 180000))

let btcField = document.querySelector('#cave-btc');
let ethField = document.querySelector('#cave-eth');
let dgeField = document.querySelector('#cave-doge');

dgeField.addEventListener('click', ()=>{ mineDoge(), buyDogeCave()});
ethField.addEventListener('click', ()=>{mineEth(), buyEthCave()});
btcField.addEventListener('click', ()=>{mineBtc(), buyBtcCave()});

//doge price
dgeField.addEventListener('mouseover', ()=>{
    showPrice('doge');
});
dgeField.addEventListener('mouseout', ()=>{
    hidePrice()
});

//eth price
ethField.addEventListener('mouseover', ()=>{
    showPrice('eth');
});
ethField.addEventListener('mouseout', ()=>{
    hidePrice()
});

//btc price
btcField.addEventListener('mouseover', ()=>{
    showPrice('btc');
});
btcField.addEventListener('mouseout', ()=>{
    hidePrice()
});

//random number generator
function randomNumber(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  