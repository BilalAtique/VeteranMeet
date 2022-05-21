import { Request, Response } from "express";
import userModel from "../model/user.model"
import createToken from "../utils/createJWTToken";

const handleErrors = (err: any) => {
    let errors = { email: '', password: '' };

    // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }
    return errors;
};

const loginUser =  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        const user = await (userModel as any).login(email, password);
        console.log("user")
        console.log(user)
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
        res.status(200).json({status: "ok", token})
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json(errors);
    }
}

export default loginUser;