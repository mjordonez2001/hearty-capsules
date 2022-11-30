import { rest } from "msw";
import { supplements } from "../data/supplements";

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
];
