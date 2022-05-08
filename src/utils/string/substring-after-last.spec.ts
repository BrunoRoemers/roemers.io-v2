import substringAfterLast from "./substring-after-last";

describe('substringAfterLast', () => {

  const cases: [string, string, string][] = [
    [null, 'aa', ''],
    [undefined, 'aa', ''],
    ['', 'aa', ''],
    ['abc', null, ''],
    ['abc', undefined, ''],
    ['abc', '', ''],
    ['abc', ' ', ''],
    ['hello world', ' ', 'world'],
    ['hello amazing world', ' ', 'world'],
    ['abcd', 'bc', 'd'],
    ['abcd', 'a', 'bcd'],
    ['abcabcabc', 'abc', ''],
    ['abcabcabc123', 'abc', '123'],
  ];

  for (const [str, fragment, expectedResult] of cases) {
    it(`when str = '${str}' and fragment = '${fragment}' the return value should be '${expectedResult}'`, () => {
      expect(substringAfterLast(str, fragment)).toBe(expectedResult);
    })
  }

})
