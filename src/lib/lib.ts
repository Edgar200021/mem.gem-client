export const formatPrice = (
  price: number,
  options?: Intl.NumberFormatOptions,
  locales: Intl.LocalesArgument = "en-US"
) => {
  return price.toLocaleString(locales, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    ...options,
  });
};
