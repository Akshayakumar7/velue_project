export const isStringNotEmpty = (value) => {
    if (value === null) {
        return false
    }
    if (!isValueDefined(value)) {
        return false;
    }
    return value?.toString()?.trim() !== ''
}

export const isValueDefined = (value) => {
    return typeof value !== 'undefined'
}