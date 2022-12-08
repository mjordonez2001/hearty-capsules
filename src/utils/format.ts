import { CartItem } from "./types";

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

export function findTotal(cart: CartItem[], state?: string) {
  const subTotal = cart.reduce((accumulator: number, item: CartItem) => {
    return (accumulator += item.unit_price * item.quantity);
  }, 0);

  const taxAmount = calculateTaxForState(subTotal, state);

  return {
    subTotal,
    taxAmount,
    total: subTotal + taxAmount,
  };
}

function calculateTaxForState(subTotal: number, state?: string) {
  if (state === "CA") {
    return subTotal * 0.1;
  }

  if (state) {
    return subTotal * 0.07;
  }

  return 0;
}
