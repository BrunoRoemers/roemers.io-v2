import isBlank from "./is-blank";
import isEmpty from "./is-empty";

// remove the prefix from the beginning of the given string
const removeStart = (str: string, prefix: string): string => {
  if (isEmpty(str)) {
    return '';
  }

  if (isEmpty(prefix)) {
    return str;
  }

  if (!str.startsWith(prefix)) {
    return str;
  }

  return str.slice(prefix.length);
}

export default removeStart;
