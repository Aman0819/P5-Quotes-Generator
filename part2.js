const quotesCollection = {
  fragments: {
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
    motivational: [
      [
        "Learn from",
        "Focus on",
        "Keep your eyes on",
        "Praise",
        "Keep believing in",
      ],
      [
        "your abilities",
        "possibilities of improvement",
        "opportunities",
        "your passion",
        "whatever makes you happy",
        "your goal",
      ],
      [
        "and it can pay off in most satisfying ways",
        "and good things will happen",
        "and it will become your habit eventually",
        "and let it be your indicator",
        "and you are heading in the right direction",
        "and interesting proposition will come your way",
        "and your dreams will come true",
      ],
    ],
  },

  randomQuoteIndex(quoteArray) {
    var randomNumber = Math.floor(Math.random() * quoteArray.length);
    return quoteArray[randomNumber];
  },

  generateQuote(beginning, middle, ending) {
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
   Select 1 to Show Friendship Quotes.
   Select 2 to Show Motivational Quotes.
   Select 0 to Exit.`
  );

  let quoteType;
  var chosenTypeOfQuote = parseInt(typeOfQuotes);

  if (chosenTypeOfQuote === 1) {
    quoteType = quotesCollection.fragments.friendship;
  } else if (chosenTypeOfQuote === 2) {
    quoteType = quotesCollection.fragments.motivational;
  } else if (chosenTypeOfQuote === 0) {
    console.log("Exit");
    break;
  } else {
    alert("Please Enter Correct Choice");
    continue;
  }

  var chosenNumberOfQuotes = Math.floor(prompt(`Select Number Of Quotes:`));
  if (chosenNumberOfQuotes <= 5 && chosenNumberOfQuotes >= 1) {
    console.clear();
    var finalQuotes = quotesCollection.generateQuote(
      quoteType[0],
      quoteType[1],
      quoteType[2]
    );
    finalQuotes.forEach((quote) => console.log(quote));
  } else {
    alert("Please Enter Between 1 to 5");
  }
} while (true);
