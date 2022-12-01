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
  category: zod.string().optional(),
  description: zod.string().optional(),
  photo_url: zod.string().optional(),
  unit_price: zod.number().optional(),
  benefits: zod.string().array().optional(),
});

export type supplementProps = zod.infer<typeof supplementSchema>;
