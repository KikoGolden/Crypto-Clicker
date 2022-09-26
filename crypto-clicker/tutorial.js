let canvas = document.querySelector('body');

function tutorial(){
  let wasd = document.createElement('img');
  wasd.src = 'images/tutorial-keys.png';
  wasd.id = 'wasd';
  wasd.classList.add('popUp');
  wasd.classList.add('tutorialKeys');

  canvas.appendChild(wasd);
}
function secondTutorial(){
    let cavesInfo = document.createElement('img');
    cavesInfo.src = 'images/caves-info.png';
    cavesInfo.id = 'caves-info';
    cavesInfo.classList.add('fadeIn');
    cavesInfo.classList.add('cavesInfo');

    canvas.appendChild(cavesInfo);

    setTimeout(()=>{
        cavesInfo.classList.remove('fadeIn');
        cavesInfo.classList.add('fadeOut');
        
        setTimeout(()=>{
            canvas.removeChild(cavesInfo);

            setTimeout(()=>{thirdTutorial()},1000)
        },900)
    }, 5000)
}

function thirdTutorial(){
    let cavesInfo = document.createElement('img');
    cavesInfo.src = 'images/buy-cave-info.png';
    cavesInfo.id = 'caves-info';
    cavesInfo.classList.add('fadeIn');
   localStorage.setItem('readyForBuy', "yes");

    cavesInfo.classList.add('cavesInfo');

    canvas.appendChild(cavesInfo);

    setTimeout(()=>{
        cavesInfo.classList.remove('fadeIn');
        cavesInfo.classList.add('fadeOut');
        
        setTimeout(()=>{
            canvas.removeChild(cavesInfo);

            setTimeout(()=>{fourthTutorial()},1000)
        },900)
    }, 5000)
}

function fourthTutorial(){
    let cavesInfo = document.createElement('img');
    cavesInfo.src = 'images/mine-tutorial.png';
    cavesInfo.id = 'caves-info';
    cavesInfo.classList.add('fadeIn');
    cavesInfo.classList.add('cavesInfo');

    canvas.appendChild(cavesInfo);

    setTimeout(()=>{
        cavesInfo.classList.remove('fadeIn');
        cavesInfo.classList.add('fadeOut');
        
        setTimeout(()=>{
            canvas.removeChild(cavesInfo);

            setTimeout(()=>{fifthTutorial()},1000)
        },900)
    }, 5000)
}

function fifthTutorial(){
    let cavesInfo = document.createElement('img');
    cavesInfo.src = 'images/sell-tutorial.png';
    cavesInfo.id = 'caves-info';
    cavesInfo.classList.add('fadeIn');
    cavesInfo.classList.add('cavesInfo');

    canvas.appendChild(cavesInfo);

    setTimeout(()=>{
        cavesInfo.classList.remove('fadeIn');
        cavesInfo.classList.add('fadeOut');
        
        setTimeout(()=>{
            canvas.removeChild(cavesInfo);
            localStorage.setItem('tutorialPassed', 'yes');
        },900)
    }, 5000)
}

export { tutorial, secondTutorial }