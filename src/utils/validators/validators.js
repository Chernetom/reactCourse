export const required = (value) => {
    if (value) return undefined;
    return "Field is required";
}

export const maxLength = (size) => (value) => {
    if (value && value.length > size) return `Max field length is ${size}`;
    return undefined;
}