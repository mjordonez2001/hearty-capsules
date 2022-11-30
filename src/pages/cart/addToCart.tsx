import { useMutation } from "@tanstack/react-query";
import { addCartItem, CartItem } from "../../utils/routes";

export function addToCart(item: CartItem) {
  const { data, error, isLoading, mutate } = useMutation(
    async () => await addCartItem(item)
  );

  return { data, error, isLoading, mutate };
}
