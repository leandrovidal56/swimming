import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwimmingDataType } from "./swimmingData";
import { getAllSwimmingTraining } from "./getAllSwimmingTraining";

export const addNewSwimmingTraining = async (payload: SwimmingDataType) => {
  try {
    const storageTrainings = await getAllSwimmingTraining();
    const storage = JSON.stringify([...storageTrainings, payload]);
    await AsyncStorage.setItem("trainings", storage);
  } catch (error) {
    console.log(error, "Error saving");
  }
};
