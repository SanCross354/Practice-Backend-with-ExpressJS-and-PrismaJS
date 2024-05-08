import { validate } from "../validation/validation.js";
import { registerUserValidation } from "../validation/user-validation.js";
import { prismaClient } from "../application/database.js"
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";

const register = async (request) => {
    const user = validate(registerUserValidation, request);

    //To Check if the user is already registered/exist
    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Username already exists")
    }

    user.password = await bcrypt.hash(user.password, 10);

    //If the user's not existed => create account
    return prismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true
        }
    });
}

//Using "default" cause can export more than one object/variables
export default {
    register
}