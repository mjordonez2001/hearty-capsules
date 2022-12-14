import { axiosClient } from "./axios";
import { CartItem, Order } from "./types";

export async function addCartItem(data: CartItem) {
  return await axiosClient.post("/cart", data);
}

export async function getSupplement(slug: string) {
  return await axiosClient.get(`/supplement/${slug}`);
}

export async function listSupplements() {
  return await axiosClient.get("/supplements");
}

export async function listSuggested(slug: string) {
  return await axiosClient.get(`/supplements/suggested/${slug}`);
}

export async function listFeatured() {
  return await axiosClient.get("/supplements/featured");
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
export async function createOrder(data: Order) {
  return await axiosClient.post("/orders", data);
}
