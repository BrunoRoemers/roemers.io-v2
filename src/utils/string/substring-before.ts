import isEmpty from "./is-empty";

const substringBefore = (str: string, fragment: string) => {
  if (isEmpty(str)) {
    return '';
  }

  if (isEmpty(fragment)) {
    return '';
  }

  const i = str.indexOf(fragment);
  if (i < 0) {
    return '';
  }

  return str.slice(0, i);
}

export default substringBefore;
