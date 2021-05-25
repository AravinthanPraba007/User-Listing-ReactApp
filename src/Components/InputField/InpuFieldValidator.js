const regex = {
    only_alphabet : new RegExp("^[a-zA-Z ]+$"),
    emailId : new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
}

export default class InpuFieldValidator {

    static required(value, message) {
        if(!value || !value.toString().trim().length) {
            return {error: true, message};
        }
        return false;
    }

    static minValue(value, message, validationParameters) {
        // console.log(validationParameters);
        if(value && value < validationParameters.minimum){
            console.log("min")
            return {error: true, message}
        }
        return false;
    }

    static maxValue(value, message, validationParameters) {
        // console.log(validationParameters);
        if(value && value > validationParameters.maximum){
            return {error: true, message}
        }
        return false;
    }

    static checkRegex(value, message, validationParameters) {
        console.log(validationParameters);
        let regexValidations = validationParameters.checkRegex;
        for(let idx = 0; idx < regexValidations.length; idx++){
            const regexValidation = regexValidations[idx];
            const result = regex[regexValidation].test(value);
            if(!result) {
                return {error: true, message}
            }
        }
        return false;

    }
}

/**
input validators = {
    [
        {checkFunction, message, {validationParameters}},
        {checkFunction, message, {validationParameters}},
    ]
}

response = {
    error : true/false,
    message : given message 
}
 */

export const validateInput = (validators, value) => {
    console.log(validators);
    if(validators && validators.length) {
        for(let idx = 0; idx < validators.length; idx++) {
            const error = validators[idx].check(value, validators[idx].message, validators[idx].validationParameters);
            if(error) {
                return error;
            }
        }
    }
    return false;
}