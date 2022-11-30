export function formatPrice(price: number, decimal = false) {
  let decimals: number;
  if (decimal) {
    decimals = 2;
  } else {
    decimals = 0;
  }

  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: decimals,
  });
}
