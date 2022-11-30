import { axiosClient } from "./axios";

type CartItem = {
  product_name: string;
  product_sku: string;
  unit_price: number;
  quantity: number;
};

export async function addCartItem(data: CartItem) {
  return await axiosClient.post("/cart_items", data);
}

export async function getSupplement(slug: string) {
  return await axiosClient.get(`/supplement/${slug}`);
}
