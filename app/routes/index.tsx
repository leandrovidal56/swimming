import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "~/screens/home";
import { SafeAreaView } from "react-native-safe-area-context";
import { Profile } from "~/screens/profile";

export function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#7bb4e3",
        marginTop: -50,
        marginBottom: -50,
      }}
    >
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Profile"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
