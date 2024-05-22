import { IQuote } from "@/interfaces";

export const chooseQuote = (quotes: IQuote[]) => {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[quoteIndex];
  while (quote.sfw !== "yes") {
    quoteIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[quoteIndex];
  }
  return quote;
};
