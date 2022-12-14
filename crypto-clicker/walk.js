import { askForTrade } from '/infoTabs.js';
import { secondTutorial } from '/tutorial.js';

let player = document.getElementById('player');
let playerImage = document.querySelector('#player img');

let playerLeft = 500;
let playerTop = 300;
let walkSpeed = 5;

let spawned = false;
let canTrade= false;

let topMax = 5;
let rightMax = 1145;
let leftMax = 340;
let bottomMax = 625;

function walk(){
    
    addEventListener('keydown', (e)=>{

        if (localStorage.getItem('walked') == 'no') {
            localStorage.setItem('walked','yes');

            setTimeout(()=>{
                
                let keys = document.getElementById('wasd');
                keys.classList.remove('popUp');
                keys.classList.add('fadeOut');

                setTimeout(()=>{
                    document.querySelector('body').removeChild(keys);

                    setTimeout(()=>{secondTutorial(); localStorage.setItem('readyForHover', 'yes')},1000);
                },900)

            }, 2000);
        }

        if (localStorage.getItem('tradeMenuOpen') == 'yes') {
           return;
        }

        if((playerTop >= 255 - 50 && playerTop <= 255 + 70 - 50) && (playerLeft >= 985 - 32 && playerLeft <= 985 + 150 - 32)){
            canTrade= true;
        }else{
            canTrade= false
        }

        if((playerTop >= 255 - 50 && playerTop <= 255 + 70 - 50) && (playerLeft >= 985 - 32 && playerLeft <= 985 + 150 - 32) && !spawned){
            askForTrade(spawned);
            spawned = true;
            setTimeout(()=>{spawned = false;},6000);
        }
        
        if(playerTop <= 215){
            rightMax = 905;
        }else{
            rightMax = 1145;
        }

        if(playerLeft >= 905){
            topMax = 215;
        }else{
            topMax = 5;
        }
    
        if (e.keyCode == 87 && !(playerTop <= topMax) ) {
            playerImage.src = './images/player-walk-up.png';
            playerTop -= walkSpeed;
            player.style.top = playerTop + 'px';
        }
    
        if (e.keyCode == 65 && !(playerLeft <= leftMax)) {
            playerImage.src = './images/player-walk-left.png';
            playerLeft -= walkSpeed;
            player.style.left = playerLeft + 'px';
        }
    
        if (e.keyCode == 83 && !(playerTop >= bottomMax)) {
            playerImage.src = './images/player-walk-down.png';
            playerTop += walkSpeed;
            player.style.top = playerTop + 'px';
        }
        
        if (e.keyCode == 68 && !(playerLeft >= rightMax)) {
            playerImage.src = './images/player-walk-right.png';
            playerLeft += walkSpeed;
            player.style.left = playerLeft + 'px';
        }

        if (e.keyCode == 69 && canTrade) {
            if(localStorage.getItem('tutorialPassed') == 'no'){return}
            localStorage.setItem('tradeMenuOpen', 'yes');
            
            let tradeMenu = document.getElementById('trade-menu');
            let background = document.getElementById('dark-bg');

            tradeMenu.classList.remove('hide');
            background.classList.remove('hide');
            localStorage.setItem('openedMenu', true)
        }

    });

    addEventListener('keyup', (e)=>{
    
        playerImage.src = './images/player-idle.png';

    });
}


export { walk }