import { Text, View } from "react-native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { chooseQuote } from "@/utils/utils";

export default function Index() {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = dayjs();
      if (date.format("HH:mm") !== currentDate.format("HH:mm")) {
        setDate(currentDate);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  const [quote, setQuote] = useState({
    time: "string",
    quote_first: "string",
    quote_time_case: "string",
    quote_last: "string",
    title: "string",
    author: "string",
    sfw: "string",
  });
  useEffect(() => {
    const fetchQuote = async () => {
      const newQuote = chooseQuote(date.format("HH:mm"));
      setQuote({ ...newQuote });
    };

    fetchQuote();
  }, [date]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <Text
        style={{
          fontFamily: "PlayfairDisplay",
          fontSize: 30,
          margin: 70,
        }}
      >
        {quote.quote_first}
        <Text style={{ fontWeight: "900" }}>{quote.quote_time_case}</Text>
        {quote.quote_last}
      </Text>
      <Text
        style={{
          fontFamily: "PlayfairDisplay",
          fontStyle: "italic",
          fontSize: 20,
          marginHorizontal: 30,
        }}
      >
        {quote.title}
      </Text>
      <Text
        style={{
          fontFamily: "PlayfairDisplay",
          fontSize: 20,
          margin: 30,
          marginTop: 0,
        }}
      >
        {quote.author}
      </Text>
    </View>
  );
}
