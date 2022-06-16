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
        image: 'images/milk-shake.png'
    },
    {
        name: 'pizza',
        image: 'images/piza.png'
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
        image: 'images/milk-shake.png'
    },
    {
        name: 'pizza',
        image: 'images/piza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

// create an element for each item in the array
function createBoard() {
    for(let i = 0; i < 10; i++) {
       const card = document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', 'i')
       gridDisplay.append(card)
    }

}

createBoard();