interface IFormatCurrencyProps {
  value: number;
  options?: {
    locale?: string;
    currency?: string;
  };
}

export const formatCurrency = ({ value, options }: IFormatCurrencyProps) => {
  const result = Intl.NumberFormat(options?.locale || "en-US", {
    style: "currency",
    currency: options?.currency || "USD",
  }).format(value);

  return result;
};
