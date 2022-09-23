import { updateCash } from '/coinUpdate.js';

let btcField = document.querySelector('#cave-btc');
let ethField = document.querySelector('#cave-eth');
let dgeField = document.querySelector('#cave-doge');


function buyDogeCave(){
    let url = dgeField.src;
    if (!url.includes("locked")) {
        return;
    }

    let cash = document.querySelector('#cash .value').textContent;
    let dollars = parseInt(cash);

    if (dollars >= 25) {
        updateCash(-25);
        dgeField.src = 'images/cave-doge.png';
        dgeField.classList.remove('buyCave');
        dgeField.classList.add('mine');
    }else{
        shake()
    }

}

function buyEthCave(){
    let url = ethField.src;
    if (!url.includes("locked")) {
        return;
    }

    let cash = document.querySelector('#cash .value').textContent;
    let dollars = parseInt(cash);

    if (dollars >= 2000) {
        updateCash(-2000);
        ethField.src = 'images/cave-etherium.png';
        ethField.classList.remove('buyCave');
        ethField.classList.add('mine');
    }else{
        shake()
    }

}

function buyBtcCave(){
    let url = btcField.src;
    if (!url.includes("locked")) {
        return;
    }

    let cash = document.querySelector('#cash .value').textContent;
    let dollars = parseInt(cash);

    if (dollars >= 50000) {
        updateCash(-50000);
        btcField.src = 'images/cave-bitcoin.png';
        btcField.classList.remove('buyCave');
        btcField.classList.add('mine');
    }else{
        shake()
    }

}

function shake(){
    if (!document.getElementById('price-info')) {return;}
    let priceInfo = document.getElementById('price-info');
    priceInfo.classList.add('shake');
}

export { buyDogeCave, buyEthCave, buyBtcCave }