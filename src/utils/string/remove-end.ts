import isBlank from "./is-blank";
import isEmpty from "./is-empty";

// remove the postfix from the end of the given string
const removeEnd = (str: string, postfix: string) => {
  if (isEmpty(str)) {
    return '';
  }

  if (isEmpty(postfix)) {
    return str;
  }

  if (!str.endsWith(postfix)) {
    return str;
  }

  return str.slice(0, str.length - postfix.length);
}

export default removeEnd;
