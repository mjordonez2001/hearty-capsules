import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../utils/routes";
import { Order } from "../../utils/types";

type Options = {
  onSuccess?: () => void;
};

export function useCreateOrder(options?: Options) {
  const queryClient = useQueryClient();

  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async (order: Order) => await createOrder(order),
    {
      onSuccess: () => {
        if (options?.onSuccess) {
          options.onSuccess();
        }

        queryClient
          .invalidateQueries({ queryKey: ["orders"] })
          .catch(console.error);
      },
    }
  );

  return { data, error, isLoading, isSuccess, mutate };
}
