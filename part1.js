const friendship = [
  ["A loyal friend", "True friends", "Your one good friend", "Good friends"],
  [
    "is worth more than",
    "can equals with",
    "will make you feel more than",
    "is a gift of",
  ],
  [
    "ten thousand friends",
    "having tons of gold and silver in life",
    "having the antidote of fifty enemies",
    "one soul in two bodies",
  ],
];

function randomQuoteIndex(quoteArray) {
  var randomNumber = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[randomNumber];
}

console.log(
  `"${randomQuoteIndex(friendship[0])} ${randomQuoteIndex(
    friendship[1]
  )} ${randomQuoteIndex(friendship[2])}."`
);
