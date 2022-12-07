import * as zod from "zod";

export const cartItemSchema = zod.object({
  product_name: zod.string(),
  product_sku: zod.string(),
  unit_price: zod.number(),
  quantity: zod.number(),
});

export type CartItem = zod.infer<typeof cartItemSchema>;

export const supplementSchema = zod.object({
  name: zod.string(),
  slug: zod.string(),
  category: zod.string(),
  description: zod.string(),
  photo_url: zod.string(),
  unit_price: zod.number(),
  benefits: zod.string().array(),
});

export type supplementProps = zod.infer<typeof supplementSchema>;
