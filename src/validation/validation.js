import { ResponseError } from "../error/response-error.js";

const validate = (schema, request) => {

    //abortEarly's used to validate all of the properties, if it's not set up as a false value, then only the username that will be checked
    const result = schema.validate(request, {
        abortEarly : false
    });

    if (result.error) {
        throw new ResponseError(400, result.error.message);
    } else {
        return result.value;
    }
}

export {
    validate
}