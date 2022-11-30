import { useMutation } from "@tanstack/react-query";
import { addCartItem } from "../../utils/routes";
import { CartItem } from "../../utils/types";

export function useAddToCart(item: CartItem) {
  const { data, error, isLoading, mutate } = useMutation(
    async () => await addCartItem(item)
  );

  return { data, error, isLoading, mutate };
}
