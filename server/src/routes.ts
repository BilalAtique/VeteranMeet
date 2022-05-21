import { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });
};

export default routes;
