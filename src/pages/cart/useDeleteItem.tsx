import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem } from "../../utils/routes";

type Options = {
  onSuccess?: () => void;
};

export function useDeleteItem(options?: Options) {
  const queryClient = useQueryClient();

  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async (sku: string) => await deleteCartItem(sku),
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
