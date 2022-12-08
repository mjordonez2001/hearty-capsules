import { useMutation } from "@tanstack/react-query";
import { deleteCartItem } from "../../utils/routes";

type Options = {
  onSuccess?: () => void;
};

export function useDeleteItem(options?: Options) {
  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async (sku: string) => await deleteCartItem(sku),
    options
  );

  return { data, error, isLoading, isSuccess, mutate };
}
