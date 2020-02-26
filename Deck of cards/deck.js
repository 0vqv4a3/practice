/* function makeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  let values = "2,3,4,5,6,7,8,9,10,j,Q,K,A";
  //   values = values.split(",");
  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}

const myDeck = makeDeck();

function drawCard(card) {
  return card.pop();
}
const card1 = drawCard(myDeck);
 */

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: '2,3,4,5,6,7,8,9,10,j,Q,K,A',
  initializeDeck() {
    const {
      deck,
      suits,
      values
    } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiply(num) {
    const cards = [];
    for (let i = 0; i < num; i++) {
      /* cards.push(this.deck.pop()); */
      this.drawCard();
    }
    return cards;
  },
  shuffleCard(deck) {
    const {
      deck
    } = this;
    // loop over array backward
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index before current element 
      const j = Math.floor(Math.random() * (i + 1));
      // swap the position in the array
      deck[i], deck[j] = deck[j], deck[i]
    }
  }
}