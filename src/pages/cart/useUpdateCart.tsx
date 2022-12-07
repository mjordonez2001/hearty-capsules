import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { CartItem } from "../../utils/types";
import { updateCartItem } from "../../utils/routes";

export function useUpdateCart(item: CartItem, options?: UseMutationOptions) {
  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async () => await updateCartItem(item),
    options
  );

  return { data, error, isLoading, isSuccess, mutate };
}
