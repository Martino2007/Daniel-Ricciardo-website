const quotes = [
  "Everything you can learn from is an opportunity to become stronger",
  "If you like going a certain way, then be bold and do it",
  "Sometimes you have a bad day, and you're like, 'I'm over this, and I just want to play tennis,' or do another sport that doesn't require any other variables, but then you have a good day, and it's like, it's amazing, and the success makes up for it",
  "In the end, you have to just pull the trigger. Trust the car, trust the brakes, just go",
  "You can't always win, although we always try",
  "When you're young, the temptation is maybe to think, 'More is more.' But a lot of the time less is more",
  "Pressure's what you make of it",
  "Success is not just about winning races, but about the journey and the lessons you learn along the way",
  "Sometimes you've just got to lick the stamp and send it",
  "I'm just a beast, I'm just an animal and I'm waiting to get let out of that cage",
  "Sometimes nostalgia is a cage"
];

// Get the button and quote display elements
const quoteButton = document.getElementById("generate-quote-btn");
const quoteDisplay = document.getElementById("quote");

// Function to generate a random quote
function generateRandomQuote() {
  // Get a random index from the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Display the quote
  quoteDisplay.textContent = quotes[randomIndex];
}

// Add an event listener to the button
quoteButton.addEventListener("click", generateRandomQuote);

// Optional: Display a random quote on page load
window.addEventListener("load", generateRandomQuote);
