/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function translateCardValues(card) {
  if(card === "A") {
    return 11
  } else if (card === "K" || card === "Q" || card === "J") {
    return 10

  } else {
    let cardAsNumber = parseInt(card)
    return cardAsNumber
  }
}

function calculateValue(total, number) {
  return parseInt(total) + parseInt(number)
}

function countAces(total, card) {
  if(card === "A") {
    return total + 1
  } else {
    return total
  }
}

function handValue (hand) {
  console.log("input provided: " + hand)

  let translatedCards = hand.map(translateCardValues);
  console.log("translatedCards: " + translatedCards)

  let cardTotal = translatedCards.reduce(calculateValue, 0);
  console.log("cardTotal: " + cardTotal)

  let numberOfAces = hand.reduce(countAces, 0);
  console.log("numberOfAces: " + numberOfAces)

  if(cardTotal > 21 && numberOfAces > 0) {
    console.log("checking if aces can lower value")
    let needToCheckAces = true;
    let acesAdjusted = 0;

    while(needToCheckAces) {
      if(cardTotal > 21 && acesAdjusted < numberOfAces) {
        cardTotal = cardTotal - 10
        acesAdjusted = acesAdjusted + 1

        console.log("ace adjustment: -cardTotal = " + cardTotal + " -numberOfAces = " + numberOfAces + " -acesAdjusted = " + acesAdjusted)
      }
      if(cardTotal <= 21 || acesAdjusted >= numberOfAces) {
        console.log("all aces adjusted")
        needToCheckAces = false;
      }
    }
  } else {
    console.log("ace adjustment not needed")
  }
  
  console.log("returning total: " + cardTotal)
  console.log("")

  return cardTotal

}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
