import { updateEth, coinUpdate } from '/coinUpdate.js';

let elonsOffer = document.getElementById('musks-offer');
let acceptBtn = document.getElementById('accept-offer');
let addedListener = false;

function offer(){
    elonsOffer.classList.remove('hide');
    elonsOffer.classList.add('popLeft');
    acceptBtn.classList.remove('hide');

    if (!addedListener) {
        addedListener = true;
        acceptBtn.addEventListener('click', ()=>{acceptOffer()});
    }

    setTimeout(()=>{
        elonsOffer.classList.remove('popLeft');
        elonsOffer.classList.add('fadeOut');
        setTimeout(()=>{
            elonsOffer.classList.add('hide');
        },900)
    },2500);
}

function acceptOffer(){
    acceptBtn.classList.add('hide');
    updateEth(1);
    coinUpdate();
}

export { offer }