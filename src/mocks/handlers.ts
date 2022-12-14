import { rest } from "msw";
import { supplements } from "../data/supplements";
import { cart } from "../data/cart";
import { cartItemSchema } from "../utils/types";
import { orders } from "../data/orders";
import { featured } from "../data/featured";

export const handlers = [
  rest.get("/supplements", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(supplements));
  }),

  rest.get("/supplements/suggested/:slug", (req, res, ctx) => {
    const supplement = supplements.find((s) => s.slug === req.params.slug);

    if (supplement) {
      const suggested = supplements.filter(
        (s) => s.category === supplement?.category && s.slug !== supplement.slug
      );

      while (suggested.length < 4) {
        const random =
          supplements[Math.floor(Math.random() * supplements.length)];

        if (random && !suggested.includes(random)) {
          suggested.push(random);
        }
      }

      return res(ctx.status(200), ctx.json(suggested));
    }

    return res(ctx.json({ error: `not found` }), ctx.status(404));
  }),

  rest.get("featured", (req, res, ctx) => {
    const result = [];

    for (let i = 0; i < featured.length; i++) {
      const supplement = supplements.find((s) => s.slug === featured[i]);
      if (!supplement) {
        return res(ctx.json({ error: `not found` }), ctx.status(404));
      }

      result.push(supplement);
    }

    return res(ctx.status(200), ctx.json(result));
  }),

  rest.get("/supplement/:slug", (req, res, ctx) => {
    const supplement = supplements.find((s) => s.slug === req.params.slug);

    if (supplement === undefined) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(supplement));
  }),

  rest.get("/cart", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cart));
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

  rest.put("/cart", async (req, res, ctx) => {
    const data = await req.json();
    const result = cartItemSchema.safeParse(data);

    if (!result.success) {
      return await res(ctx.json({ error: result.error }), ctx.status(401));
    }

    const item = cart.find(
      (item) => item.product_sku === result.data.product_sku
    );

    if (item) {
      item.quantity = result.data.quantity;
    } else {
      return await res(ctx.json({ error: `item not found` }), ctx.status(404));
    }

    return await res(ctx.status(204));
  }),

  rest.delete("/cart/:sku", async (req, res, ctx) => {
    const sku = req.params.sku;
    const item = cart.find((s) => s.product_sku === sku);

    if (item) {
      const index = cart.indexOf(item);
      cart.splice(index, 1);
    } else {
      return await res(ctx.json({ error: `item not found` }), ctx.status(404));
    }

    return await res(ctx.delay(100), ctx.status(204));
  }),

  rest.post("/orders", async (req, res, ctx) => {
    const data = await req.json();
    orders.push(data);
    return await res(ctx.delay(500), ctx.status(201));
  }),
];
