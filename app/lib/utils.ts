export const roundTo2Decimal = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};
