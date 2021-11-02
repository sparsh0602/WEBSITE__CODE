let size=window.innerWidth;
if(size>650)
{
    let header=document.querySelector("header");
    header.innerText="F L I P - I T";
}

const cards =document.querySelectorAll('.memory-card');


let hasFlippedCard=false; // TO CHECK IS FLIPPED FIRST TIME 
let firstCard,secondCard;
let lockboard=false;
let cnt=0;


shuffle();//TO SHUFFLE CARDS


function flipcard()
{
    if(lockboard) // so that if someone tries to flip the card before last card is unflipped then nothing happens
    return;

    if(this===firstCard) // so that if someone tries to flip the flipped card that is again click on the card flipped on first move then also nothing happens
    return;


    this.classList.toggle('flip'); // this represents memory-card && toggle is used to remove class list if present and if not present add that class ,so if we click on it,it will add and then remove it 


    if(!hasFlippedCard) // hasflipped is false means first click
{
    hasFlippedCard=true;
    firstCard=this;
}

else // second click
{
    hasFlippedCard=false;
    secondCard=this;

    // two cards flipped therfore checking if they both are same (using data property)
    if(firstCard.dataset.framework===secondCard.dataset.framework)
    { 
        firstCard.removeEventListener('click',flipcard); // WE REMOVE ALL PROPERTIES SO REMAIN AT SAME POSITION
        secondCard.removeEventListener('click',flipcard);

        cnt=cnt+1;
        if(cnt===6)
        {
            document.querySelector(".win").style.display = "block";

        }
      
        
    }
    else // WE WILL FLIP THEM
    {
        lockboard=true;
        setTimeout(() => { // else it will remove property immediately ,so we wont be able to see the second card  
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            lockboard=false;
        }, 1000);
      
    }

}

}

function shuffle() // to shuffle the cards , we are giving a random number ranging from 0-11 to our cards and positioning it 
{
    cards.forEach(card=>{
        let randomPos=Math.floor(Math.random()*12);
        card.style.order=randomPos;
    })
}


//WE WILL LOOP THROUGH EVERY CARD AND WHENEVER ANY CARD IS CLICKED WE WILL CALL FUNCTION FLIPCARD
cards.forEach(card=>card.addEventListener('click',flipcard));
