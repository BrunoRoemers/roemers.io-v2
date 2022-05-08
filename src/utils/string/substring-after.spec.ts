import substringAfter from "./substring-after";

describe('substringAfter', () => {

  const cases: [string, string, string][] = [
    [null, 'aa', ''],
    [undefined, 'aa', ''],
    ['', 'aa', ''],
    ['abc', null, ''],
    ['abc', undefined, ''],
    ['abc', '', ''],
    ['abc', ' ', ''],
    ['hello world', ' ', 'world'],
    ['abcd', 'bc', 'd'],
    ['abcd', 'a', 'bcd'],
    ['abcabcabc', 'abc', 'abcabc'],
  ];

  for (const [str, fragment, expectedResult] of cases) {
    it(`when str = '${str}' and fragment = '${fragment}' the return value should be '${expectedResult}'`, () => {
      expect(substringAfter(str, fragment)).toBe(expectedResult);
    })
  }

})
