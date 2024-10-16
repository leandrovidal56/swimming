import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwimmingDataType } from "./swimmingData";
import { Alert } from "react-native";
import { getAllSwimmingTraining } from "./getAllSwimmingTraining";

export const editSwimmingTraining = async (payload: SwimmingDataType) => {
  try {
    const storageTrainings = await getAllSwimmingTraining();

    const filtered = storageTrainings.filter((item) => item.id !== payload.id);

    console.log(filtered, "take here");

    filtered.push(payload);

    await AsyncStorage.setItem("trainings", JSON.stringify(filtered));
    Alert.alert("Updated", "Training was updated successfully");
  } catch (error) {
    console.log(error, "Error removing training");
  }
};
