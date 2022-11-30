import * as zod from "zod";

export const cartItemSchema = zod.object({
  product_name: zod.string(),
  product_sku: zod.string(),
  unit_price: zod.number(),
  quantity: zod.number(),
});

export type CartItem = zod.infer<typeof cartItemSchema>;
