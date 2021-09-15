document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
	{
		imge : "num_1",
		src  : 'FB_IMG_15949396723547671.jpg'
	},
	{
		imge : "num_1",
		src  : 'FB_IMG_15949396723547671.jpg'
	},
	{
		imge : "num_2",
		src  : 'FB_IMG_15976084738498850.jpg'
	},
	{
		imge : "num_2",
		src  : 'FB_IMG_15976084738498850.jpg'
	},
	{
		imge : "num_3",
		src  : 'FB_IMG_16138274164694322.jpg'
	},
	{
		imge : "num_3",
		src  : 'FB_IMG_16138274164694322.jpg'
	},
	{
		imge : "num_4",
		src  : 'FB_IMG_15949210262671775.jpg'
	},
	{
		imge : "num_4",
		src  : 'FB_IMG_15949210262671775.jpg'
	},
	{
		imge : "num_5",
		src  : 'FB_IMG_15949210189392822.jpg'
	},
	{
		imge : "num_5",
		src  : 'FB_IMG_15949210189392822.jpg'
	},
	{
		imge : "num_6",
		src : 'FB_IMG_15949210341018441.jpg'
	},
	{
		imge : "num_6",
		src  : 'FB_IMG_15949210341018441.jpg'
	}
];

// var and const to use later

const space = document.querySelector('.space');
const result = document.querySelector('#result');
const cardsWon = [];
var cardsChosen = [];
var cardsChosenId = [];

// draw space work vreate space
 
function createBoard() {
	for (i=0 ; i <  cardArray.length ; i++)
		{
			var card = document.createElement('img');
			card.setAttribute('src' , 'index.jpg');
			card.setAttribute('height' , 100);
			card.setAttribute('width' , 100);
			card.setAttribute('data-id' , i);
			space.appendChild(card);
			card.addEventListener('click' , flipCard);
		}
}

// flip^card function

function flipCard() {
    var cardId = this.getAttribute('data-id');
	cardsChosen.push(cardArray[cardId].image);
	cardsChosenId.push(cardId);
	this.setAttribute('src' , cardArray[cardId].src);
	if (cardsChosen.length === 2 ){
        setTimeout(checkForMatch , 300);
    }
}

// function to checkMutch

function checkForMatch() {
    var cards = document.querySelectorAll('img');
	const optionOneId = cardsChosenId[0];
	const optionTwoId = cardsChosenId[1];
	if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src' , 'index.jpg');
        cards[optionTwoId].setAttribute('src' , 'index.jpg');
		alert('you clicked the image !! ');
    } else if (cardsChosen[0] === cardsChosen[1]) {
		alert('you found muth !! ');
		cards[optionOneId].setAttribute('src' , 'white.jpg');
		cards[optionTwoId].setAttribute('src' , 'white.jpg');
		cards[optionOneId].removeEventListener('click' , flipCard);
		cards[optionTwoId].removeEventListener('click' , flipCard);
		cardsWon.push(cardsChosen);
    } else {
		cards[optionOneId].setAttribute('src' , 'index.jpg');
		cards[optionTwoId].setAttribute('src' , 'index.jpg');
		alert("your wrong ...!!!  ");
	}
	cardsChosen=[];
	cardsChosenId = [];
	result.textContent = cardsWon.length ;
	if (cardsWon.length === cardArray.length/2) {
		result.textContent= ("you win !!!");
    }
}

cardArray.sort(() => 0.5 - Math.random());

createBoard();

});
