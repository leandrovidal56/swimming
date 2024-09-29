import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwimmingDataType } from "./swimmingData";
import { Alert } from "react-native";

export const removeSwimmingTraining = async (id: string) => {
  try {
    const existingData = await AsyncStorage.getItem("trainings");
    let trainingArray: SwimmingDataType[] = [];

    if (existingData) {
      trainingArray = JSON.parse(existingData);
    }

    const index = trainingArray.findIndex((item) => item.id === id);
    if (index !== -1) {
      trainingArray.splice(index, 1);

      const jsonValue = JSON.stringify(trainingArray);
      await AsyncStorage.setItem("trainings", jsonValue);
      Alert.alert("Removed", "Training was deleted ");
    }
  } catch (error) {
    console.log(error, "Error removing training");
  }
};
