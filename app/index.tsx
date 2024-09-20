import { SafeAreaView } from "react-native-safe-area-context";
import { Router } from "~/routes";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#7bb4e3",
        marginVertical: -50,
      }}
    >
      <Router />
    </View>
  );
}
