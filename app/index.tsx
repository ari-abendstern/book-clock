import { Text, View } from "react-native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Index() {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{date.format("hh:mm")}</Text>
    </View>
  );
}
