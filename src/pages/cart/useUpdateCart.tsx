import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "../../utils/routes";
import { CartItem } from "../../utils/types";

type Options = {
  onSuccess?: () => void;
};

export function useUpdateCart(options?: Options) {
  const queryClient = useQueryClient();

  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async (item: CartItem) => await updateCartItem(item),
    {
      onSuccess: () => {
        if (options?.onSuccess) {
          options.onSuccess();
        }

        queryClient
          .invalidateQueries({ queryKey: ["cart"] })
          .catch(console.error);
      },
    }
  );

  return { data, error, isLoading, isSuccess, mutate };
}
