import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import createUser from "../service/user.service";

const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

export default createUserHandler;
