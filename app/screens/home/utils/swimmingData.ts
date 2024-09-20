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

export const swimmingData: SwimmingDataType[] = [
  {
    id: "1",
    day: "Today",
    distance: 1200,
    calories: 400,
    laps: 22,
    time: 55,
    hearthRateMin: 50,
    hearthRateMax: 150,
  },
];
