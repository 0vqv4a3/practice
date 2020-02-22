// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

// let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
// let suit = ['clubs', 'spades', 'hearts', 'diamonds'];

/* 
function getCard() {
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    const RandomCard = {
        value: value[Math.floor(Math.random() * 14)],
        suit: suit[Math.floor(Math.random() * 4)]
    };
    return RandomCard;
} */


function getCard() {
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    return {
        value: value[Math.floor(Math.random() * value.length)],
        suit: suit[Math.floor(Math.random() * suit.length)]
    };
}