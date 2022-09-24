import { coinUpdate, updateDoge, updateEth, updateBitcoin, updateCash } from '/coinUpdate.js';

let buyDoge = document.getElementById('buyDoge');
let buyEth = document.getElementById('buyEth');
let buyBtc = document.getElementById('buyBtc');

let sellDoge = document.getElementById('sellDoge');
let sellEth = document.getElementById('sellEth');
let sellBtc = document.getElementById('sellBtc');

let amountDoge = document.getElementById('amount-dge');
let amountBtc = document.getElementById('amount-btc');
let amountEth = document.getElementById('amount-eth');

let btc = document.querySelector('#btc .value');
let eth = document.querySelector('#eth .value');
let dge = document.querySelector('#dge .value');
let cash = document.querySelector('#cash .value');

function closeTradeMenu(){
    let closeBtn = document.getElementById('close-btn');

    closeBtn.addEventListener('click', ()=>{
            let tradeMenu = document.getElementById('trade-menu');
            let background = document.getElementById('dark-bg');

            tradeMenu.classList.add('hide');
            background.classList.add('hide');
    });
} 

function addBuySellFunc(){
  
    
   buyDoge.addEventListener('click', ()=>{

     let amount = parseFloat(amountDoge.value);
          if (!amount || amount <= 0) {return}

          let dollars = parseFloat(cash.textContent);
          let price = amount * 0.70;
          
          if(dollars >= price){
               cash.textContent = parseFloat(dollars - price).toFixed(2);
               updateDoge(amount);
               coinUpdate();
          }

   });
   buyEth.addEventListener('click', ()=>{

     let amount = parseFloat(amountEth.value);
     if (!amount || amount <= 0) {return}

     let dollars = parseFloat(cash.textContent);
     let price = amount * 2000;
     
     if(dollars >= price){
          cash.textContent = parseFloat(dollars - price).toFixed(2);
          updateEth(amount);
          coinUpdate();
     }

   });
   buyBtc.addEventListener('click', ()=>{

     let amount = parseFloat(amountBtc.value);
     if (!amount || amount <= 0) {return}

     let dollars = parseFloat(cash.textContent);
     let price = amount * 50000;
     
     if(dollars >= price){
          cash.textContent = parseFloat(dollars - price).toFixed(2);
          updateBitcoin(amount);
          coinUpdate();
     }

   });

   sellDoge.addEventListener('click', ()=>{
    
          let amount = amountDoge.value;
          if (!amount || amount <= 0) {return}

          let dollars = parseFloat(cash.textContent);
          let dgeValue =  parseFloat(dge.textContent);
          let price = amount * 0.70;
          
          if(dgeValue >= amount){
               cash.textContent = parseFloat(dollars + price).toFixed(2);
               updateDoge(-amount);
               coinUpdate();
          }

    });
   sellEth.addEventListener('click', ()=>{

    let amount = amountEth.value;
          if (!amount || amount <= 0) {return}

          let dollars = parseFloat(cash.textContent);
          let ethValue =  parseFloat(eth.textContent);
          let price = amount * 2000;
          
          if(ethValue >= amount){
               cash.textContent = parseFloat(dollars + price).toFixed(2);
               updateEth(-amount);
               coinUpdate();
          }

   });
   sellBtc.addEventListener('click', ()=>{

    let amount = amountBtc.value;
    if (!amount || amount <= 0) {return}

    let dollars = parseFloat(cash.textContent);
    let btcValue =  parseFloat(btc.textContent);
    let price = amount * 50000;
    
    if(btcValue >= amount){
         cash.textContent = parseFloat(dollars + price).toFixed(2);
         updateBitcoin(-amount);
         coinUpdate();
    }
    
   });

}

export { closeTradeMenu, addBuySellFunc }