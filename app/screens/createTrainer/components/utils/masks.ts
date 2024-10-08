export const maskDistance = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned === "") return "";

  if (cleaned.length <= 3) {
    return `${cleaned}m`;
  } else {
    const km = cleaned.slice(0, cleaned.length - 3);
    const m = cleaned.slice(cleaned.length - 3);
    return `${km}.${m}km`;
  }
};
export const maskTime = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const limited = cleaned.slice(0, 6);
    const fullLength = limited.padStart(6, "0");
    const hours = fullLength.slice(0, -4);
    const minutes = fullLength.slice(-4, -2);
    const seconds = fullLength.slice(-2);
    if (!value) {
      return "Time";
    }
  
    return `${parseInt(hours, 10)}:${minutes}:${seconds}`;
  };