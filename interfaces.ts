export interface IQuote {
  time: string;
  quote_first: string;
  quote_time_case: string;
  quote_last: string;
  title: string;
  author: string;
  sfw: string;
}

export interface ITimeQuote {
  time:            string;
  quote_first:     string;
  quote_time_case: string;
  quote_last:      string;
  title:           string;
  author:          string;
  sfw:             Sfw;
}

export type Sfw = "yes" | "no";
