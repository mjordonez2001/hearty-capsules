import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../../utils/routes";
import { Order } from "../../utils/types";

type Options = {
  onSuccess?: () => void;
};

export function useCreateOrder(options?: Options) {
  const { data, error, isLoading, isSuccess, mutate } = useMutation(
    async (order: Order) => await createOrder(order),
    options
  );

  return { data, error, isLoading, isSuccess, mutate };
}
