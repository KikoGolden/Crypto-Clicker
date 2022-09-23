import { updateBitcoin, updateEth, updateDoge, coinUpdate } from '/coinUpdate.js';

let dgeField = document.querySelector('#cave-doge');
let btcField = document.querySelector('#cave-btc');
let ethField = document.querySelector('#cave-eth');

function mineDoge(){
    let url = dgeField.src;
    
    if (url.includes("locked")) {
        return;
    }
   updateDoge();
   coinUpdate();
}

function mineEth(){
    let url = ethField.src;

    if (url.includes("locked")) {
        return;
    }
   updateEth();
   coinUpdate();
}

function mineBtc(){
    let url = btcField.src;

    if (url.includes("locked")) {
        return;
    }
   updateBitcoin();
   coinUpdate();
}

export { mineDoge, mineEth, mineBtc }