let scores, roundScore, activePlayers;



disapearDice();
resetValues();




document.querySelector('.btn.btn--roll').addEventListener('click' , function(){

    dice = Math.floor((Math.random() *6) + 1);
    document.querySelector('.dice').style.display= 'block';
    document.querySelector('.dice').src= `dice-${dice}.png`;

    if(dice !== 1){
        roundScore += dice;
        document.getElementById(`current--${activePlayers}`).textContent = roundScore;
    }else{
        nextPlayer();
    }
})

document.querySelector('.btn--hold').addEventListener('click' , function(){
    scores[activePlayers] += roundScore;
    document.getElementById(`score--${activePlayers}`).textContent = scores[activePlayers ];
    if(scores[activePlayers] >= 100) {
        document.getElementById(`name--${activePlayers}`).textContent = 'WINNER';
        document.getElementById(`current--${activePlayers}`).textContent = 0;
        document.querySelector(`.player--${activePlayers}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayers}`).classList.add('player--winner');
        document.querySelector('.btn--roll').disabled = true;
        document.querySelector('.btn--hold').disabled = true;
        disapearDice();

    }else{
        nextPlayer();
    }
})

document.querySelector('.btn--new').addEventListener('click' , function () { 
    document.getElementById(`name--${activePlayers}`).textContent = `PLAYER ${activePlayers+1}`;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector(`.player--${activePlayers}`).classList.remove('player--winner');
    document.querySelector('.btn--roll').disabled = false;
    document.querySelector('.btn--hold').disabled = false;
    disapearDice();
    resetValues();
 })

function disapearDice(){
    document.querySelector('.dice').style.display= 'none';
}

function nextPlayer() { 
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    roundScore = 0 ;
    document.getElementById(`current--${activePlayers}`).textContent = roundScore;
    activePlayers ===0 ? activePlayers=1 :activePlayers=0;
    window.setTimeout(disapearDice, 1000);
}

function resetValues() {
    activePlayers= 0;
    scores= [0,0];
    roundScore= 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--1').textContent = 0;
}

