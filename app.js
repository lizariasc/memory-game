const cardArray = [
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },
    {
        name: 'ice-crean',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        image: 'images/hotdog.png'
    },
    {
        name: 'ice-crean',
        image: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardWon = [];

// create an element for each item in the array
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       gridDisplay.append(card)
    }

}

createBoard();

function checkMath() {
    const cards = document.querySelectorAll('img')
    if(cardsChosen[0] == cardsChosen[1]) {
        window.alert('you found a match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardWon.push(cardsChosen)
    }
    cardsChosen = [];
    cardsChosenIds = [];
}

function flipCard() {
    //get id of the card
    const cardId = this.getAttribute('data-id');
    //push the name to the new array
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    
    // show the img when I flip the card
    this.setAttribute('src', cardArray[cardId].image)
    if (cardsChosen.length === 2) {
        setTimeout(checkMath, 500) 
}
}