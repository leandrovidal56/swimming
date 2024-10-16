import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwimmingDataType } from "./swimmingData";

export const filterSwimmingTraining = async (id: string) => {
  try {
    const existingData = await AsyncStorage.getItem("trainings");
    let trainingArray: SwimmingDataType[] = [];
    if (existingData) {
      trainingArray = JSON.parse(existingData);
    }
    const selected = trainingArray.find((item) => item.id === id);
    return selected;
  } catch (error) {
    console.log(error, "Error removing training");
  }
};
