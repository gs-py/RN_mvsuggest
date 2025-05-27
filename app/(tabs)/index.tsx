
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <View className="flex-1 items-center justify-center w-[100dvw] h-[100dvh] bg-indigo-600">
      <Text
        onPress={() => {
          setCount(count + 1);
        }}
        className="bg-red-500  min-w-4 text-center p-3"
      >
        {count}
      </Text>
      <View><Text>new name here</Text></View>
     
    
    </View>
  );
}
