import { axiosClient } from "./axios";
import { CartItem } from "./types";

export async function addCartItem(data: CartItem) {
  return await axiosClient.post("/cart_items", data);
}

export async function getSupplement(slug: string) {
  return await axiosClient.get(`/supplement/${slug}`);
}

export async function listSupplements() {
  return await axiosClient.get("/supplements");
}
