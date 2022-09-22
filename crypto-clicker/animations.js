let shop = document.querySelector('#shop img');
let player = document.querySelector('#player img');

let shopRight = 0;
let playerRight = 0;

function animatePlayer(){
    if(playerRight == 0){
        playerRight += 64;
       player.style.right = playerRight + 'px';
    }else if(playerRight == 64){
        playerRight += 64;
       player.style.right = playerRight + 'px';
    }else if(playerRight == 128){
        playerRight += 64;
        player.style.right = playerRight + 'px';
    }else if(playerRight == 192){
        playerRight += 64;
        player.style.right = playerRight + 'px';
    }else if(playerRight == 256){
        playerRight += 64;
        player.style.right = playerRight + 'px';
    }else if(playerRight == 320){
        playerRight = 0;
        player.style.right = playerRight + 'px';
    }

    setTimeout(animatePlayer, 200);
}

function animateShop(){
    if(shopRight == 0){
       shopRight += 200;
       shop.style.right = shopRight + 'px';
    }else if(shopRight == 200){
       shopRight += 200;
       shop.style.right = shopRight + 'px';
    }else if(shopRight == 400){
        shopRight += 200;
        shop.style.right = shopRight + 'px';
    }else if(shopRight == 600){
        shopRight += 200;
        shop.style.right = shopRight + 'px';
    }else if(shopRight == 800){
        shopRight += 200;
        shop.style.right = shopRight + 'px';
    }else if(shopRight == 1000){
        shopRight = 0;
        shop.style.right = shopRight + 'px';
    }

    setTimeout(animateShop, 200);
}

export { animatePlayer, animateShop }