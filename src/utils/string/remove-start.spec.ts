import removeStart from "./remove-start";

describe('removeStart', () => {

  const cases: [string, string, string][] = [
    [null, 'aa', ''],
    [undefined, 'aa', ''],
    ['', 'aa', ''],
    ['abc', null, 'abc'],
    ['abc', undefined, 'abc'],
    ['abc', '', 'abc'],
    ['abc', ' ', 'abc'],
    [' abc', ' ', 'abc'],
    ['hello world', 'hello', ' world'],
    ['helo world', 'hello', 'helo world'],
    ['abc', 'a', 'bc'],
    ['abc', 'b', 'abc'],
  ];

  for (const [str, prefix, expectedResult] of cases) {
    it(`when str = '${str}' and prefix = '${prefix}' the return value should be '${expectedResult}'`, () => {
      expect(removeStart(str, prefix)).toBe(expectedResult);
    })
  }

})
