'use strict';

// Get Quotes from API

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pcik a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

async function getQquotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    
    // Catch Error
  }
}

getQquotes();