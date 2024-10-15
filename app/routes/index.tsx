import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "~/components/text";
import { Home, CreateTrainer, Notifications, Profile } from "~/screens/index";
import { theme } from "~/utils/theme";
import { TouchableOpacity } from "react-native";
import { EditTrainer } from "~/screens/editTrainer";

export function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          headerShown: true,
          headerShadowVisible: true,
          headerStyle: {
            backgroundColor: theme.colors.lightBlue,
          },
          headerTintColor: theme.colors.white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Text color="white" size="7" message="Leandro Vidal" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Ionicons
              name="notifications"
              size={24}
              color={theme.colors.white}
              onPress={() => navigation.navigate("Notifications")}
            />
          ),
        })}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerTitle: "Profile",
            headerTitleStyle: { fontSize: 28, fontWeight: "bold" },
            headerLeft: () => null,
            headerRight: () => null,
          }}
        />
        <Stack.Screen
          name="CreateTrainer"
          component={CreateTrainer}
          options={{
            headerShown: true,
            headerTitle: "Create Your Training",
            headerTitleStyle: { fontSize: 28, fontWeight: "bold" },
            headerLeft: () => null,
            headerRight: () => null,
          }}
        />
        <Stack.Screen
          name="EditTrainer"
          component={EditTrainer}
          options={{
            headerShown: true,
            headerTitle: "Edit Your Training",
            headerTitleStyle: { fontSize: 28, fontWeight: "bold" },
            headerLeft: () => null,
            headerRight: () => null,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: true,
            headerTitle: "Notifications",
            headerTitleStyle: { fontSize: 28, fontWeight: "bold" },
            headerLeft: () => null,
            headerRight: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
