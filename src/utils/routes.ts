import { axiosClient } from "./axios";
import { CartItem } from "./types";

export async function addCartItem(data: CartItem) {
  return await axiosClient.post("/cart", data);
}

export async function getSupplement(slug: string) {
  return await axiosClient.get(`/supplement/${slug}`);
}

export async function listSupplements(category: string) {
  return await axiosClient.get(`/supplements/${category}`);
}

export async function getCart() {
  return await axiosClient.get("/cart");
}

export async function updateCartItem(data: CartItem) {
  return await axiosClient.put("/cart", data);
}

export async function deleteCartItem(sku: string) {
  return await axiosClient.delete(`/cart/${sku}`);
}
