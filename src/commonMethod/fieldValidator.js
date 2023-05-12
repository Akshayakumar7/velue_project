import { AADHAR_REGEX } from "../general/generalConst";
import { isStringNotEmpty } from "./stringMethod";

export const isEnteredValidPhoneNumber = (value) => {
    const nreg = /^[0-9]+$/;
    return nreg.test(value)
}

export const validatePhoneNumber = (value) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneno.test(value)
}

export const validateName = (value = '') => {
    try {
        return isStringNotEmpty(value);
    } catch (ex) {
        return false;
    }
};

export const addharValidation = (value = '') => {
    if (AADHAR_REGEX.test(value)) {
        return true;
    } else {
        return false;
    }
};

export const accountNumberValidate = (name = '') => {
    var pattern = /^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/;
    return pattern.test(name); // true
};

export const ifscCodeValidate = (name = '') => {
    var ifscCode = /^[A-Za-z]{4}\d{7}$/;
    return ifscCode.test(name); // true
};

export const isInValidEmailAddress = (email) => {
    const value = email.trim();
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
};