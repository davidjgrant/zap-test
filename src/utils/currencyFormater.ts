export const currencyFormater = (currency: string, value: number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
  minimumFractionDigits: 2,
}).format(value);
