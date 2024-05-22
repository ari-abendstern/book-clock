import { Text, View } from "react-native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { chooseQuote } from "@/utils/utils";

export default function Index() {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [quote, setQuote] = useState({
    time: "string",
    quote_first: "string",
    quote_last: "string",
    title: "string",
    author: "string",
    sfw: "string",
  });
  useEffect(() => {
    async () => {
      const newQuote = chooseQuote(date.format("HH:mm"));
      setQuote(newQuote);
    };
  }, [date]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{date.format("HH:mm")}</Text>
    </View>
  );
}
