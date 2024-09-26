export type SwimmingDataType = {
  id: string;
  day?: string;
  distance: number;
  craw: number;
  backstroke: number;
  breaststroke: number;
  butterfly: number;
  calories: number;
  laps: number;
  time: number;
  hearthRateMin: number;
  hearthRateMax: number;
};

export const swimmingData: SwimmingDataType[] = [];
