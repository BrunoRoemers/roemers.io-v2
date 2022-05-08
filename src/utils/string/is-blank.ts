const isBlank = (str?: string): boolean => str === undefined || str === null || str.trim() === ''

export default isBlank;
