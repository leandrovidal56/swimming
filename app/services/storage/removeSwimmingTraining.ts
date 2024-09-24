import AsyncStorage from "@react-native-async-storage/async-storage";
import { SwimmingDataType } from "./swimmingData";

export const removeSwimmingTraining = async (id: string) => {
  try {
    const existingData = await AsyncStorage.getItem("trainnings");
    let trainningArray: SwimmingDataType[] = [];

    if (existingData) {
      trainningArray = JSON.parse(existingData);
    }

    const index = trainningArray.findIndex((item) => item.id === id);
    if (index !== -1) {
      trainningArray.splice(index, 1);

      const jsonValue = JSON.stringify(trainningArray);
      await AsyncStorage.setItem("trainnings", jsonValue);
    }
  } catch (error) {
    console.log(error, "Error removing training");
  }
};
