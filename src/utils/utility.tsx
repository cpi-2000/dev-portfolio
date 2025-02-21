export const formatTimestamp = (timestamp: string | number | Date): string => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short", // Thu
    month: "short", // Sep
    day: "2-digit", // 15
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formatter.format(new Date(timestamp));
};
