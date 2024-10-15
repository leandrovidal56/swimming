export const FormatDate = (dateString: Date | String): string => {
  const date = new Date(dateString.toString());

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
