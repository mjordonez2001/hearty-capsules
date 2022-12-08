import * as zod from "zod";

export const cartItemSchema = zod.object({
  product_name: zod.string(),
  product_sku: zod.string(),
  unit_price: zod.number(),
  quantity: zod.number(),
  product_img: zod.string().optional(),
});

export type CartItem = zod.infer<typeof cartItemSchema>;

export const supplementSchema = zod.object({
  name: zod.string(),
  slug: zod.string(),
  category: zod.string().optional(),
  description: zod.string().optional(),
  photo_url: zod.string(),
  unit_price: zod.number(),
  benefits: zod.string().array().optional(),
});

export type supplementProps = zod.infer<typeof supplementSchema>;

export const orderSchema = zod.object({
  name: zod.string(),
  cart: cartItemSchema.array(),
  tracking_number: zod.string().optional(),
  total: zod.number(),
});

export type Order = zod.infer<typeof orderSchema>;
