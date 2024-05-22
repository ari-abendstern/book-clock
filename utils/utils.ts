import { IQuote } from "@/interfaces";

export const chooseQuote = async (time: string) => {
  const filePath = `${__dirname}/../assets/data/quotes/${time}.json`;

  const quotes: IQuote[] = await require(filePath);

  let quoteIndex = Math.floor(Math.random() * quotes.length);

  let quote = quotes[quoteIndex];

  while (quote.sfw !== "yes") {
    quoteIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[quoteIndex];
  }

  return quote;
};
