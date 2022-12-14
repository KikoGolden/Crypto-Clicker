import { checkMoney } from '/checkIfWon.js';

let btcField = document.querySelector('#btc');
let ethField = document.querySelector('#eth');
let dgeField = document.querySelector('#dge');

let btc = document.querySelector('#btc .value');
let eth = document.querySelector('#eth .value');
let dge = document.querySelector('#dge .value');

let doge = 0;
let etherium = 0;
let bitcoin = 0;


function updateCash(number){
  
let cash = document.querySelector('#cash .value');
  let dollarsNew =  parseInt(cash.textContent);
    dollarsNew += number;
    cash.textContent = dollarsNew;
  }
    
function updateDoge(number=0.5){
  doge += number;
  dge.textContent = parseFloat(doge).toFixed(1);
}

function updateBitcoin(number=0.0009){
    bitcoin += number;
    btc.textContent = parseFloat(bitcoin).toFixed(4);
}

function updateEth(number=0.002){
    etherium += number;
    eth.textContent = parseFloat(etherium).toFixed(3);
}

//show hide coin if value is zero or not
function coinUpdate(){

  checkMoney();

  if (doge > 0) {
    dgeField.classList.remove('hide'); 
  }else{
    dgeField.classList.add('hide'); 
  }

  if (etherium > 0.001) {
    ethField.classList.remove('hide'); 
  }else{
    ethField.classList.add('hide'); 
  }

  if (bitcoin >= 0.0009) {
    btcField.classList.remove('hide'); 
  }else{
    btcField.classList.add('hide'); 
  }
  
}
  
export { updateCash, updateBitcoin, updateEth, updateDoge, coinUpdate }