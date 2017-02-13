var quotes= [
'"But man is not made for defeat. A man can be destroyed but not defeated."',
 '"There is nothing permanent except change."',
'"Learning never exhausts the mind."',
'"No act of kindness, no matter how small, is ever wasted."',
'"The journey of a thousand miles begins with one step."',
'"When we are no longer able to change a situation—we are challenged to change ourselves."',
'"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails."',
'"In three words I can sum up everything I\’ve learned in life: it goes on."',
'"The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart."',
'"Where there is love there is life."'];

var quoteAuthor = [
  '-Ernest Hemingway',
  '-Heraclitus',
  '-Leonardo da Vinci',
  '-Aesop',
  '-Lao Tzu',
  '-Viktor E. Frankl',
  '-William Arthur Ward',
  '-Robert Frost',
  '-Helen Keller',
  '-Mahatma Gandhi'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quote-display").innerHTML = quotes[randomNumber];
  document.getElementById("quote-author").innerHTML = quoteAuthor[randomNumber];
  document.getElementById("btn").style.backgroundColor = colors[randomNumber];
}
