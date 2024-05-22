import { IQuote } from "@/interfaces";
import * as timeQuotes from "../assets/data/time-quotes.json";

export const chooseQuote = (time: string) => {
  const quotes: IQuote[] = timeQuotes[time as keyof typeof timeQuotes];

  let quoteIndex = Math.floor(Math.random() * quotes.length);

  let quote = quotes[quoteIndex];

  return quote;
};
