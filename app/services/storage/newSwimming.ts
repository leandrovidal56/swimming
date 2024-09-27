import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwimmingDataType } from "./swimmingData";
import { getSwimmingTraining } from "./getSwimmingTraining";

export const addNewSwimmingTraining = async (payload: SwimmingDataType) => {
  try {
    const storageTrainings = await getSwimmingTraining();
    const storage = JSON.stringify([...storageTrainings, payload]);
    await AsyncStorage.setItem("trainings", storage);
  } catch (error) {
    console.log(error, "Error saving");
  }
};
