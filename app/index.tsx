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
      }}
    >
      <Text
        style={{
          fontFamily: "serif",
          fontStyle: "italic",
        }}
      >
        {quote.quote_first}
      </Text>
      <Text
        style={{
          fontFamily: "serif",
          fontWeight: "bold"
        }}
      >
        {quote.quote_time_case}
      </Text>
      <Text
        style={{
          fontFamily: "serif",
          fontStyle: "italic",
        }}
      >
        {quote.quote_last}
      </Text>
    </View>
  );
}
