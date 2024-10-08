export type SwimmingDataType = {
  id: string;
  day: string;
  distance: number;
  calories: number;
  laps: number;
  time: string;
  hearthRateMin: number;
  hearthRateMax: number;
};

export const swimmingData: SwimmingDataType[] = [];
