import { rest } from "msw";
import { supplements } from "../data/supplements";
import { cart } from "../data/cart";

export const handlers = [
  rest.get("/supplements", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(supplements));
  }),

  rest.get("/supplement/:slug", (req, res, ctx) => {
    const supplement = supplements.find((s) => s.slug === req.params.slug);

    if (supplement === undefined) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(supplement));
  }),

  rest.post("/cart_items", async (req, res, ctx) => {
    const data = await req.json();
    cart.push(data);
    return await res(ctx.delay(500), ctx.status(201));
  }),
];
