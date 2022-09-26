import { updateBitcoin, updateEth, updateDoge, coinUpdate } from '/coinUpdate.js';

let dgeField = document.querySelector('#cave-doge');
let btcField = document.querySelector('#cave-btc');
let ethField = document.querySelector('#cave-eth');

function mineDoge(){
    
    let multiplier = parseInt(localStorage.getItem('multiplier'));
    let url = dgeField.src;
    
    if (url.includes("locked")) {
        return;
    }
    if (!dgeField.classList.contains('mining')) {
        dgeField.classList.add("mining");
        setTimeout(()=>{dgeField.classList.remove('mining')},100);
    }

   updateDoge(0.5 * multiplier);
   coinUpdate();
}

function mineEth(){

    
    let multiplier = parseInt(localStorage.getItem('multiplier'));
    let url = ethField.src;

    if (url.includes("locked")) {
        return;
    }
    if (!ethField.classList.contains("mining")) {
        ethField.classList.add("mining");
        setTimeout(()=>{ethField.classList.remove('mining')},100);
    }

   updateEth(0.002 * multiplier);
   coinUpdate();
}

function mineBtc(){
    
    let multiplier = parseInt(localStorage.getItem('multiplier'));
    let url = btcField.src;

    if (url.includes("locked")) {
        return;
    }
    if (!btcField.classList.contains('mining')) {
        btcField.classList.add("mining");
        setTimeout(()=>{btcField.classList.remove('mining')},100);
    }

   updateBitcoin(0.0009 * multiplier);
   coinUpdate();
}

export { mineDoge, mineEth, mineBtc }