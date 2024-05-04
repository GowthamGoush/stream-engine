export const formatNumberWithSuffix = (value) => {
  const val = Number(value);

  if (val < 1_000) {
    return val;
  }

  if (val < 1_000_000) {
    return Math.round(val / 1_000) + "K";
  }

  if (val < 1_000_000_000) {
    return Math.round(val / 1_000_000) + "M";
  }

  if (val < 1_000_000_000_000) {
    return Math.round(val / 1_000_000_000) + "B";
  }
};
