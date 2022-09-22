function askForTrade(){
  let gameField = document.getElementById('game-field');

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

export { askForTrade }