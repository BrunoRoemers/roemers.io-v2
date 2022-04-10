import isBlank from "./is-blank";

// join non-blank strings with single space in-between
const join = (...strs: string[]) => strs.filter(str => !isBlank(str)).join(' ')

export default join;
