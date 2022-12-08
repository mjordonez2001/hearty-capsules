import { useMutation } from "@tanstack/react-query";
import { updateCartItem } from "../../utils/routes";
import { CartItem } from "../../utils/types";

type Options = {
  onSuccess?: () => void;
};

export function useUpdateCart(options?: Options) {
  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async (item: CartItem) => await updateCartItem(item),
    options
  );

  return { data, error, isLoading, isSuccess, mutate };
}
