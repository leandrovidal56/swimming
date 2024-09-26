import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Home, CreateTrainer, Notifications, Profile } from "~/screens/index";

export function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Stack.Navigator
          initialRouteName="Home"
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
          <Stack.Screen
            name="CreateTrainer"
            component={CreateTrainer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
