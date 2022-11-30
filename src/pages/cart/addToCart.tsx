import { useMutation } from "@tanstack/react-query";
import { addCartItem } from "../../utils/routes";

export function addToCart() {
  const { data, error, isLoading, mutate } = useMutation(
    async () =>
      await addCartItem({
        product_sku: "test",
        product_name: "test",
        unit_price: 1,
        quantity: 1,
      })
  );

  return { data, error, isLoading, mutate };
}
