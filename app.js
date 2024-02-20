//declare
const quoteList = document.getElementById("quote-list");
const newQuoteButton = document.getElementById("new-quote-button");

//action
newQuoteButton.addEventListener("click", () => {
  //array
  const quotes = ["hello!", "why!", "where!", "when!", "ok!"];

  //random index
  const quoteIndex = Math.floor(Math.random() * quotes.length);

  //chocs random index
  const newQuote = quotes[quoteIndex];

  //create element
  const quoteContainer = document.createElement("div");

  //give id name
  quoteContainer.id = "quote-container";

  //append to container
  quoteList.appendChild(quoteContainer);

  //create element
  const quotePar = document.createElement("p");

  //give id name
  quotePar.id = "quote-text";

  //add quote to container
  quotePar.innerHTML = newQuote;

  //append to container
  quoteContainer.appendChild(quotePar);
}); //end for action
