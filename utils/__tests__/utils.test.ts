import testQuotes from "../../assets/data/quotes/00_00.json";

import { chooseQuote } from "../utils";

describe("chooseQuote", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.99999999);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  test("when passed an array containing one quote, returns that quote", () => {
    const testQuote = [
      {
        time: "00:07",
        quote_first: "It was ",
        quote_time_case: "seven minutes after midnight",
        quote_last:
          ". The dog was lying on the grass in the middle of the lawn in front of Mrs. Shears’s house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream.",
        title: "The Curious Incident of the Dog in the Night-Time",
        author: "Mark Haddon",
        sfw: "yes",
      },
    ];

    expect(chooseQuote(testQuote)).toEqual({
      time: "00:07",
      quote_first: "It was ",
      quote_time_case: "seven minutes after midnight",
      quote_last:
        ". The dog was lying on the grass in the middle of the lawn in front of Mrs. Shears’s house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream.",
      title: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
      sfw: "yes",
    });
  });
  test("when passed an array containing multiple quotes, the returned quote should be randomly selected from the array", () => {
    expect(chooseQuote(testQuotes)).toEqual({
      time: "00:00",
      quote_first: "There was the ",
      quote_time_case: "midnight",
      quote_last:
        " hike with the boys to the end of the promenade and the big argument about the election of a housemaster. What had become of responsibility and service? And brotherly love?",
      title: "The Hammer of God",
      author: "Bo Giertz",
      sfw: "yes",
    });
  });
});
