import isEmpty from "./is-empty";

const substringAfterLast = (str: string, fragment: string) => {
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

  return str.slice(i + fragment.length);
}

export default substringAfterLast;
