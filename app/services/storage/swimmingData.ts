import AsyncStorage from "@react-native-async-storage/async-storage";

export type SwimmingDataType = {
  id: string;
  day: string;
  distance: number;
  calories: number;
  laps: number;
  time: number;
  hearthRateMin: number;
  hearthRateMax: number;
};

export const swimmingData: SwimmingDataType[] = [];
