import { rest } from "msw";
import { supplements } from "../data/supplements";
import { cart } from "../data/cart";
import { cartItemSchema } from "../utils/types";

export const handlers = [
  rest.get("/supplements/:category", (req, res, ctx) => {
    const category = req.params.category;

    if (category === "All") {
      return res(ctx.status(200), ctx.json(supplements));
    }

    const categorySupplements = supplements.filter(
      (s) => s.category === category
    );

    if (categorySupplements) {
      return res(ctx.status(200), ctx.json(categorySupplements));
    }

    return res(ctx.status(404), ctx.json("Category not found"));
  }),

  rest.get("/supplement/:slug", (req, res, ctx) => {
    const supplement = supplements.find((s) => s.slug === req.params.slug);

    if (supplement === undefined) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(supplement));
  }),

  rest.post("/cart", async (req, res, ctx) => {
    const data = await req.json();
    const result = cartItemSchema.safeParse(data);

    if (!result.success) {
      return await res(ctx.json({ error: result.error }), ctx.status(401));
    }

    const item = cart.find(
      (item) => item.product_sku === result.data.product_sku
    );

    if (item) {
      item.quantity += result.data.quantity;
    } else {
      cart.push(result.data);
    }

    return await res(ctx.delay(500), ctx.status(201));
  }),
];
