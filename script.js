const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "I used to think I was indecisive, but now I'm not so sure.", author: "Unknown" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "I'm not arguing, I'm just explaining why I'm right.", author: "Unknown" },
  { text: "The road to success is always under construction.", author: "Lily Tomlin" },
  { text: "Do or do not. There is no try.", author: "Yoda" },
  { text: "If you think nobody cares, try missing a couple of payments.", author: "Steven Wright" },
  { text: "The only time I set the bar low is for limbo.", author: "Michael Scott" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');
const quoteBox = document.getElementById('quoteBox');

function showQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];

  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = `"${quote.text}"`;
    authorEl.textContent = `— ${quote.author}`;
    
    quoteBox.style.opacity = 1;
  }, 500);
}

button.addEventListener('click', showQuote);
