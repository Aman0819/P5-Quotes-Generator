const quotesCollection = {
  fragments: {
    love: [
      [
        "Life is the flower",
        "To love and be loved",
        "You can’t blame",
        "Sometimes the heart",
        "I look at you",
      ],
      [
        "for which",
        "is to feel the",
        "gravity for",
        "sees what is",
        "and see the rest of my life",
      ],
      [
        "love is the honey",
        "sun from both sides",
        "falling in love",
        "invisible to the eye",
        "in front of my eyes",
      ],
    ],
    friendship: [
      [
        "A loyal friend",
        "True friends",
        "Your one good friend",
        "Good friends",
      ],
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
    ],
  },

  randomQuoteIndex: function (quoteArray) {
    var randomNumber = Math.floor(Math.random() * quoteArray.length);
    return quoteArray[randomNumber];
  },

  generateQuote: function (beginning, middle, ending) {
    let quotesArray = [];
    for (let i = 0; i < chosenNumberOfQuotes; i++) {
      quotesArray.push(
        `"${this.randomQuoteIndex(beginning)} ${this.randomQuoteIndex(
          middle
        )} ${this.randomQuoteIndex(ending)}."`
      );
    }
    return quotesArray;
  },
};

do {
  var typeOfQuotes = prompt(
    `Please Select Your Choices:
   Select 1 to Show Love Quotes.
   Select 2 to Show Friendship Quotes.
   Select 0 to Exit.`
  );

  let quoteType;
  var chosenTypeOfQuote = parseInt(typeOfQuotes);

  if (chosenTypeOfQuote === 1) {
    quoteType = quotesCollection.fragments.love;
  } else if (chosenTypeOfQuote === 2) {
    quoteType = quotesCollection.fragments.friendship;
  } else if (chosenTypeOfQuote === 0) {
    console.log("Exit");
    break;
  } else {
    alert("Please Enter Correct Choice");
    continue;
  }

  var chosenNumberOfQuotes = Math.floor(prompt(`Select Number Of Quotes:`));
  if (chosenNumberOfQuotes <= 5 && chosenNumberOfQuotes >= 1) {
    var finalQuotes = quotesCollection.generateQuote(
      quoteType[0],
      quoteType[1],
      quoteType[2]
    );
    finalQuotes.forEach((quote) => console.log(quote));
    console.log("----------------------------------------------");
  } else {
    alert("Please Enter Between 1 to 5");
  }
} while (true);
