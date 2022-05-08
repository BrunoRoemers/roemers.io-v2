import isEmpty from "./is-empty";

const substringBeforeLast = (str: string, fragment: string) => {
  if (isEmpty(str)) {
    return '';
  }

  if (isEmpty(fragment)) {
    return '';
  }

  const i = str.lastIndexOf(fragment);
  if (i < 0) {
    return '';
  }

  return str.slice(0, i);
}

export default substringBeforeLast;
