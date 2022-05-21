import userModel from "../model/user.model"

const createUser = async (input: any) => {
    try {
        return await userModel.create(input);
    } catch (error) {
        console.log(error);
    }
}

export default createUser;