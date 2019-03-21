var suits = {
'spade': 'spade',
'heart': 'heart',
'club': 'club',
'diamond': 'diamond'
};

class Card {
	constructor(suit, faceValue){
  	this.suit = suit;
    this.faceValue = faceValue;
  }
}

class Deck {
	constructor(){
  	this.cardDeck = [];
  }
  
  buildDeck(){
  	for (var i = 1; i <= 13; i++){
    	for (var s in suits){
      	this.cardDeck.push(new Card(suits[s], i));
      }
    }
  }
}


function display(){
	var deck = new Deck();
  deck.buildDeck();
  var shuffledArr = shuffle(deck.cardDeck);
  var row = 0;
  var display = '<div class="row">';
  var finalResult = '';
  for (var card of shuffledArr){
  	if (row === 5){
    	display += '</div>';
			finalResult += display;
      display = '<div class="row">';
      row = 0;
      //console.log('final: ', finalResult);
    } 
  	display += '<div>' + 'suit: ' + card.suit + ' value: '+ card.faceValue + '</div>';
    row++;
  }
  
  finalResult += display;
  document.getElementById("displayDiv").innerHTML = finalResult;
}

function shuffle(arr){
	curIdx = arr.length;
  var tempVal;
  while(0 !== curIdx){
  	var randomIdx = getRandomInt(0, 52);
    curIdx -= 1;
    
    tempVal = arr[randomIdx];
    arr[randomIdx] = arr[curIdx];
    arr[curIdx] = tempVal;
  }
  return arr;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

display();
