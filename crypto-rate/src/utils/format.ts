export const formatCurrency = (num: number | string) => {
  const number = typeof num === "string" ? parseFloat(num) : num;

  if (number >= 1_000_000_000_000)
    return (number / 1_000_000_000_000).toFixed(2) + "T";
  if (number >= 1_000_000_000) return (number / 1_000_000_000).toFixed(2) + "B";
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(2) + "M";
  if (number >= 1_000) return (number / 1_000).toFixed(2) + "K";
  return number.toString();
};
