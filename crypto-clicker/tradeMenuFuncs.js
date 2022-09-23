function closeTradeMenu(){
    let closeBtn = document.getElementById('close-btn');

    closeBtn.addEventListener('click', ()=>{
            let tradeMenu = document.getElementById('trade-menu');
            let background = document.getElementById('dark-bg');

            tradeMenu.classList.add('hide');
            background.classList.add('hide');
    });
} 

export { closeTradeMenu }