import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwimmingDataType } from "./swimmingData";

export const getAllSwimmingTraining = async () => {
  try {
    const storage = await AsyncStorage.getItem("trainings");
    const swimmingData: SwimmingDataType[] = storage ? JSON.parse(storage) : [];
    return swimmingData;
  } catch (error) {
    console.log(error, "Error reading training data");
    return [];
  }
};
