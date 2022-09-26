let lamboMenu = document.getElementById('lambo-menu');
let darkbackground = document.getElementById('dark-bg');
let lamboBtn = document.getElementById('buyLamboBtn');

function checkMoney(){

    let money = document.querySelector('#cash .value');
    let cash = parseFloat(money.textContent).toFixed(2);

        if (cash >= 1000000) {
            lamboMenu.classList.remove('hide');
            lamboMenu.classList.add('fadeIn');
            darkbackground.classList.remove('hide');
            lamboBtn.addEventListener('click', congratulationsScreen);
        }

}

function congratulationsScreen(){
    document.querySelector('body').innerHTML = `<img class="endMessage fadeIn" src="images/congratulations.png" alt="congratulations">`;
}


export { checkMoney }