import { animatePlayer, animateShop } from '/animations.js';
import { walk } from '/walk.js';
import { hidePrice, showPrice } from '/infoTabs.js';
import { buyDogeCave, buyEthCave, buyBtcCave } from '/buyCaves.js';
import { mineDoge, mineEth, mineBtc } from '/mineTokens.js';
import { closeTradeMenu, addBuySellFunc } from '/tradeMenuFuncs.js';

animateShop();
animatePlayer();
walk();
closeTradeMenu();
addBuySellFunc();

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