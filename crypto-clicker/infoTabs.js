let gameField = document.getElementById('game-field');

function askForTrade(){

  let tradeInfo = document.createElement('img');
  tradeInfo.src = 'images/trade-info.png';
  tradeInfo.classList.add('trade-info');
  tradeInfo.classList.add('popUp');

  gameField.appendChild(tradeInfo);

  setTimeout(()=>{
  tradeInfo.classList.remove('popUp');
  tradeInfo.classList.add('popOut');
    setTimeout(()=>{
        gameField.removeChild(tradeInfo);
     },1000);
  },5000);

}

function showPrice(coin){
  
  if (document.getElementById('price-info')) {
    return;
  }
  let priceInfo = document.createElement('img');

  if (coin == 'doge') {
    let field = document.querySelector('#cave-doge');
    let url = field.src;
      if (!url.includes("locked")) {return;}

    priceInfo.src = 'images/price-doge.png';

  }else if (coin == 'eth') {
    let field = document.querySelector('#cave-eth');
    let url = field.src;
      if (!url.includes("locked")) {return;}

    priceInfo.src = 'images/price-eth.png';
  }else if(coin == 'btc'){
    let field = document.querySelector('#cave-btc');
    let url = field.src;
      if (!url.includes("locked")) {return;}

    priceInfo.src = 'images/price-btc.png';
  }
    priceInfo.classList.add('trade-info');
    priceInfo.classList.add('slideIn');
    priceInfo.id = 'price-info';
  
    gameField.appendChild(priceInfo);

}

function hidePrice(){
  if (!document.getElementById('price-info')) {
    return;
  }
  let priceInfo = document.getElementById('price-info');
  priceInfo.classList.remove('slideIn');
  priceInfo.classList.add('slideOut');
  setTimeout(()=>{
    gameField.removeChild(priceInfo);
  },10);
}



export { hidePrice, showPrice, askForTrade }