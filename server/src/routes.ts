import { Express, Request, Response } from "express";
import createUserHandler from "./controller/user.controller";
import loginUser from "./controller/login.controller"

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok" });
  });
  app.post('/api/user', createUserHandler)
  app.post('/api/login', loginUser)

};

export default routes;
