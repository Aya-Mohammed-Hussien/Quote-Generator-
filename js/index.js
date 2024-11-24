// // First Trial (Repeated Quotes)

// // Quotes Array
// var quotes = [
//   " “You only live once, but if you do it right, once is enough.”― Mae West",
//   " “Life is what happens to us while we are making other plans.”― Allen Saunders ",
//   " “The best revenge is massive success.”― Frank Sinatra",
//   " “You miss 100% of the shots you don't take.”― Wayne Gretzy",
//   " “It's not what happens to you, but how you react to it that matters.”― Epictetus",
//   " “Everything you can imagine is real.”― Pablo Picasso",
//   " “Sometimes the questions are complicated and the answers are simple.”― Dr. Seuss",
//   " “Good friends, good books, and a sleepy conscience: this is the ideal life.”― Mark Twain",
//   " “Do one thing every day that scares you.”― Eleanor Roosevelt",
//   " “What's meant to be will always find a way”― Trisha Yearwood",
// ];
// // An empty array to store random quote with random number
// var quoteWithNum = [];

// // Function using Loop to store the empty array with quote and unique random number
// function getUniqeNumber() {
//   for (var i = 0; i < quotes.length; i++) {
//     var randomNum = Math.floor(Math.random() * quotes.length);
//     quoteWithNum.push({ quote: quotes[i], randomNumber: randomNum });
//   }
// }
// getUniqeNumber();

// // Function to get any random quote from the array
// function getRandomQuote() {
//   var indexRandomly = Math.floor(Math.random() * quoteWithNum.length);
//   return quoteWithNum[indexRandomly];
// }
// // Manipulate HTML
// function generateQuote() {
//   var randomQuote = getRandomQuote();
//   document.getElementById("message").innerHTML = randomQuote.quote;
// }
// generateQuote();

// Second Trial

// Quotes Array
// var quotes = [
//   " “You only live once, but if you do it right, once is enough.”― Mae West",
//   " “Life is what happens to us while we are making other plans.”― Allen Saunders ",
//   " “The best revenge is massive success.”― Frank Sinatra",
//   " “You miss 100% of the shots you don't take.”― Wayne Gretzy",
//   " “It's not what happens to you, but how you react to it that matters.”― Epictetus",
//   " “Everything you can imagine is real.”― Pablo Picasso",
//   " “Sometimes the questions are complicated and the answers are simple.”― Dr. Seuss",
//   " “Good friends, good books, and a sleepy conscience: this is the ideal life.”― Mark Twain",
//   " “Do one thing every day that scares you.”― Eleanor Roosevelt",
//   " “What's meant to be will always find a way”― Trisha Yearwood",
// ];
// // // An empty array to store random quote with unique random number
// var quoteWithNum = [];
// //Function to get random quote from the array with no repeat
// function getRandomQuote() {
//   for (var i = 0; i < quotes.length; i++) {
//     var randomIndex = Math.floor(Math.random() * quotes.length);
//     if (!quoteWithNum.includes(randomIndex)) {
//       quoteWithNum.push(randomIndex);
//       return quotes[randomIndex];
//     }
//   }
// }
// // Manipulate HTML
// function generateQuote() {
//   var randomQuote = getRandomQuote();
//   document.getElementById("message").innerHTML = randomQuote;
// }
// generateQuote();

// Third Trial
// Quotes Array
var quotes = [
  " “You only live once, but if you do it right, once is enough.”― Mae West",
  " “Life is what happens to us while we are making other plans.”― Allen Saunders ",
  " “The best revenge is massive success.”― Frank Sinatra",
  " “You miss 100% of the shots you don't take.”― Wayne Gretzy",
  " “It's not what happens to you, but how you react to it that matters.”― Epictetus",
  " “Everything you can imagine is real.”― Pablo Picasso",
  " “Sometimes the questions are complicated and the answers are simple.”― Dr. Seuss",
  " “Good friends, good books, and a sleepy conscience: this is the ideal life.”― Mark Twain",
  " “Do one thing every day that scares you.”― Eleanor Roosevelt",
  " “What's meant to be will always find a way”― Trisha Yearwood",
];
// // // An empty array to store random quote with unique random number
var quoteWithNum = [];

// //Function to get random quote from the array with no repeat

function getRandomQuote() {
  if (quoteWithNum.length === quotes.length) {
    quoteWithNum = []; //to reset the array to be reused again
  }
var randomIndex;
do {
  randomIndex = Math.floor(Math.random() * quotes.length);
} while (quoteWithNum.includes(randomIndex));
quoteWithNum.push(randomIndex);
return quotes[randomIndex];
}

// Manipulate HTML
function generateQuote() {
  var randomQuote = getRandomQuote();
  document.getElementById("message").innerHTML = randomQuote;
}
