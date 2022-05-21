import { Express, Request, Response } from "express";
import createUserHandler from "./controller/user.controller";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });
  app.post('/api/user', createUserHandler)

};

export default routes;
