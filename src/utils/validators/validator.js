export const required = value => {
    if(value) return undefined
    return 'Field is required'
}
export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}
export const voidValue =  value =>
  value && value.trim() === '' ? `Enter your text` : undefined