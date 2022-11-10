import { rest } from "msw";

let supplements = [
  {
    slug: "b12",
    name: "Vitamin B12",
    ...
  },
  {
    slug: "tide-pods",
    name: "Tide Pods",
    ...
  }
]

export const handlers = [
  rest.get("/api/supplements", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(supplements)
    );
  }),
  rest.get("/api/supplement/:slug", (req, res, ctx) => {
    const supplement = supplements.find(s => s.slug == req.params.slug);

    if (!supplement) {
      return res(
        ctx.status(404)
      )
    }

    return res(
      ctx.status(200),
      ctx.json(supplement)
    );
  }),
];
