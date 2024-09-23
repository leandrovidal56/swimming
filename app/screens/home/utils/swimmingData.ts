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

export const addNewSwimmingTraining = (data: SwimmingDataType) => {
  swimmingData.push(data);
};

export const removeSwimmingTraining = (idRemove: string) => {
  const index = swimmingData.findIndex((item) => item.id === idRemove);
  if (index !== -1) {
    swimmingData.splice(index, 1);
  }
};
