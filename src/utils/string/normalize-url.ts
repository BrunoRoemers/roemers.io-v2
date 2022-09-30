import isBlank from "./is-blank";
import removeEnd from "./remove-end";
import removeStart from "./remove-start";
import substringAfter from "./substring-after";

// add site root to path (if not yet present)
// NOTE: the domain name in the path will be discarded (if present)
const normalizeUrl = (siteRoot: string, path: string): string => {
  const normalizedSiteRoot = removeEnd(siteRoot, '/');

  if (isBlank(path)) {
    return normalizedSiteRoot;
  }

  // if we detect a domain, remove it from the path
  const pathDomain = path.match(/https?:\/\/[^\/]+/);
  const pathWithoutDomain = pathDomain ? substringAfter(path, pathDomain[0]) : path;

  // remove slash at beginning and end of path
  const normalizedPath = removeStart(removeEnd(pathWithoutDomain, '/'), '/');

  if (isBlank(normalizedPath)) {
    return normalizedSiteRoot;
  }

  // site root is blank and the path does not start with a slash or domain
  if (isBlank(siteRoot) && removeEnd(path, '/') === normalizedPath) {
    return normalizedPath;
  }

  return normalizedSiteRoot + '/' + normalizedPath;
}

export default normalizeUrl;
