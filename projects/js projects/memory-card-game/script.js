const cards =document.querySelectorAll('.memory-card')

let hasFlippedCard =false;
lockboard = false;
let firstCard, secondCard;
let matchedCards =0;

function flipCard(){
    if(lockboard) return
    if (this === firstCard)return;
    this.classList.add('flip')

    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true
        firstCard = this;
        return;
        // console.log(hasFlippedCard, firstCard);
        
    }
        //second click
        hasFlippedCard = false ;
        secondCard =this;
        // console.log(firstCard ,secondCard);

        // console.log(firstCard.dataset.framework);
        // console.log(secondCard.dataset.framework);
        checkForMatch();
        // console.log('function was executed!');
        
   
}




function checkForMatch() {
    let isMatch =firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch? disableCards(): unflipCards()
    
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedCards+=2
    checkWin();
    
    resetBoard()
}

function unflipCards() {
    lockboard=true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard()
    }, 1500);
}

function resetBoard (){
    [hasFlippedCard ,lockboard]=[false,false]
    [firstCard,secondCard]=[null,null]
}
function checkWin(){
    if (matchedCards===cards.length){
        setTimeout(()=> {alert ('הצלחת במשחק')
        location.reload();}
        ,500)
    }
}

(function shuffle (){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();



cards.forEach(card => card.addEventListener('click',flipCard))