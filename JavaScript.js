let cardsColor = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("span");
cards = [...cards];

let startTime = new Date().getTime();

let activeCard = ""; 
let activeCards = [];

let gamePairs = cards.length/2;
let gameResult = 0;

const gameDisplay = document.querySelector('#page')

const startBtn = document.querySelector('.start')
startBtn.onclick = function(){
    document.querySelector('#gradient').style.display= 'none'
    gameDisplay.style.display = 'block'
}

let clickCard = function() {
 

    activeCard = this;

    if(activeCard == activeCards[0]) return;

    activeCard.classList.remove("hidden");
       

    if (activeCards.length === 0) {
        activeCards[0] = this;
        return;
        
   } else {
        cards.forEach(card => card.removeEventListener("click", clickCard))
   }    activeCards[1] = activeCard;
        setTimeout(function(){
            if(activeCards[0].className === activeCards[1].className) {
                console.log("wygrane")
                activeCards.forEach(card => card.classList.add("off"))
                gameResult++;
                if(gameResult == gamePairs) {
                    let endTime = new Date().getTime();
                    let gameTime = (endTime - startTime)/1000
                    alert(`Congratulations! Your time is: ${gameTime} seconds`)
                }
            }
            else {
                console.log("przegrana")
                activeCards.forEach(card => card.classList.add("hidden"))
            }
            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard))
        }, 500)
    }


let init = function () {
    cards.forEach(card => { 
        let position = Math.floor(Math.random() *
        cardsColor.length); 
        card.classList.add(cardsColor[position]);  
        cardsColor.splice(position, 1);
    })

    setTimeout(function () { 
        cards.forEach(card => {
            card.classList.add("hidden")
            card.addEventListener("click", clickCard)
        })
    }, 2000)
}    
    function toggleVisability(id) {
        if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
    } else {
        document.getElementById(id).style.visibility = "visible";
    }
}

init()