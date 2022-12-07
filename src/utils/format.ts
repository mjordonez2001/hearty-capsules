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

export function findTotal(cart: CartItem[]) {
  let total = 0;
  cart.forEach((item: CartItem) => {
    total += item.unit_price * item.quantity;
  });

  return total;
}
