class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }

  changeCardsPositions() {
    // recebe parâmetros passados pelo forEach( function(value, index, array) )
    const [ thisCardValue, thisCardIndex, cards ] = [...arguments];
    // sorteia um indice
    let randomCardIndex = Math.floor( Math.random() * cards.length );
    // trocando cartas de lugar em 2 passos:
    // 1 - coloca no card atual o valor do card de indice sorteado
    cards[thisCardIndex] = cards[randomCardIndex];
    // 2- coloca no card de indice sorteado o valor do card atual
    cards[randomCardIndex] = thisCardValue;
  }

  shuffleCards() {
    let cards = this.cards;
    // Para cada cartão, muda sua posição
    cards.forEach(this.changeCardsPositions);
    this.cards = cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let isTheSameCard = (card1 === card2);

    if (isTheSameCard) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  isFinished() {
    let allPairsGessed = (this.pairsGuessed === this.cards.length/2);
    return allPairsGessed ? true :false;
  }
}
