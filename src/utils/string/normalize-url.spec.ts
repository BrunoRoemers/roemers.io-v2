import normalizeUrl from "./normalize-url";
import removeEnd from "./remove-end";

describe('normalizeUrl', () => {

  const cases: [string, string, string][] = [
    [null, '/path/to/page', '/path/to/page'],
    [undefined, '/path/to/page', '/path/to/page'],
    ['', '/path/to/page', '/path/to/page'],

    [null, '/path/to/page/', '/path/to/page'],
    [undefined, '/path/to/page/', '/path/to/page'],
    ['', '/path/to/page/', '/path/to/page'],

    [null, 'path/to/page', 'path/to/page'],
    [undefined, 'path/to/page', 'path/to/page'],
    ['', 'path/to/page', 'path/to/page'],

    [null, 'path/to/page/', 'path/to/page'],
    [undefined, 'path/to/page/', 'path/to/page'],
    ['', 'path/to/page/', 'path/to/page'],

    [null, 'http://roemers.io/path/to/page', '/path/to/page'],
    [undefined, 'http://roemers.io/path/to/page', '/path/to/page'],
    ['', 'http://roemers.io/path/to/page', '/path/to/page'],

    [null, 'https://roemers.io/path/to/page', '/path/to/page'],
    [undefined, 'https://roemers.io/path/to/page', '/path/to/page'],
    ['', 'https://roemers.io/path/to/page', '/path/to/page'],

    ['/', 'path/to/page', '/path/to/page'],
    ['/', '/path/to/page', '/path/to/page'],
    ['/', 'http://roemers.io/path/to/page', '/path/to/page'],
    ['/', 'https://roemers.io/path/to/page', '/path/to/page'],

    ['http://roemers.io', null, 'http://roemers.io'],
    ['http://roemers.io', undefined, 'http://roemers.io'],
    ['http://roemers.io', '', 'http://roemers.io'],

    ['http://roemers.io/', null, 'http://roemers.io'],
    ['http://roemers.io/', undefined, 'http://roemers.io'],
    ['http://roemers.io/', '', 'http://roemers.io'],

    ['http://roemers.io', '/', 'http://roemers.io'],
    ['http://roemers.io', '/path/to/page', 'http://roemers.io/path/to/page'],
    ['http://roemers.io/', '/path/to/page', 'http://roemers.io/path/to/page'],
    ['http://roemers.io', '/path/to/page/', 'http://roemers.io/path/to/page'],
    ['http://roemers.io', 'path/to/page/', 'http://roemers.io/path/to/page'],
    // TODO maybe this would make more sense?
    // ['http://roemers.io', 'path/to/page/', 'path/to/page'],

    ['https://roemers.io', null, 'https://roemers.io'],
    ['https://roemers.io', undefined, 'https://roemers.io'],
    ['https://roemers.io', '', 'https://roemers.io'],

    ['https://roemers.io/', null, 'https://roemers.io'],
    ['https://roemers.io/', undefined, 'https://roemers.io'],
    ['https://roemers.io/', '', 'https://roemers.io'],

    ['https://roemers.io', '/', 'https://roemers.io'],
    ['https://roemers.io', '/path/to/page', 'https://roemers.io/path/to/page'],
    ['https://roemers.io/', '/path/to/page', 'https://roemers.io/path/to/page'],
    ['https://roemers.io', '/path/to/page/', 'https://roemers.io/path/to/page'],
    ['https://roemers.io', 'path/to/page', 'https://roemers.io/path/to/page'],
    ['https://roemers.io/', 'path/to/page', 'https://roemers.io/path/to/page'],

    ['https://roemers.io/', 'http://google.com/test/123', 'https://roemers.io/test/123'],

    // these inputs are not valid, but it should be handled like this
    ['https://roemers.io/', 'mailto:bruno@roemers.io', 'https://roemers.io/mailto:bruno@roemers.io'],
    [null, 'mailto:bruno@roemers.io', 'mailto:bruno@roemers.io'],
    [undefined, 'mailto:bruno@roemers.io', 'mailto:bruno@roemers.io'],
    ['', 'mailto:bruno@roemers.io', 'mailto:bruno@roemers.io'],

    ['aaa', 'hello', 'aaa/hello'],
    ['aaa', '/hello', 'aaa/hello'],
    ['aaa/', 'hello', 'aaa/hello'],
    ['aaa/', '/hello', 'aaa/hello'],
    ['aaa', 'bbb/hello', 'aaa/bbb/hello'],
    ['aaa', 'https://bbb/hello', 'aaa/hello'],
  ];

  for (const [siteRoot, path, expectedResult] of cases) {
    it(`when siteRoot = '${siteRoot}' and path = '${path}' the return value should be '${expectedResult}'`, () => {
      expect(normalizeUrl(siteRoot, path)).toBe(expectedResult);
    })
  }

})
