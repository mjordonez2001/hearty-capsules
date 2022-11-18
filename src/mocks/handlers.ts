import { rest } from "msw";
import { supplements } from "../data/supplements";

export const handlers = [
  rest.get("/supplements", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(supplements));
  }),
];
