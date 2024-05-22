import { IQuote } from "@/interfaces";
import * as timeQuotes from "../assets/data/time-quotes.json";

export const chooseQuote = (time: string) => {
  const quotes: IQuote[] = timeQuotes[time as keyof typeof timeQuotes];

  const quoteIndex = Math.floor(Math.random() * quotes.length);

  const quote = quotes[quoteIndex];

quote.quote_first.replace("</br>", "\n")
quote.quote_time_case.replace("</br>", "\n")
quote.quote_last.replace("</br>", "\n")


  return quote;
};
