import substringBefore from "./substring-before";

describe('substringBefore', () => {

  const cases: [string, string, string][] = [
    [null, 'aa', ''],
    [undefined, 'aa', ''],
    ['', 'aa', ''],
    ['abc', null, ''],
    ['abc', undefined, ''],
    ['abc', '', ''],
    ['abc', ' ', ''],
    ['abc', 'xyz', ''],
    ['hello world', ' ', 'hello'],
    ['abcd', 'bc', 'a'],
    ['abcd', 'a', ''],
    ['abcd', 'd', 'abc'],
    ['abcabcabc', 'abc', ''],
    ['xyzabc', 'abc', 'xyz'],
  ];

  for (const [str, fragment, expectedResult] of cases) {
    it(`when str = '${str}' and fragment = '${fragment}' the return value should be '${expectedResult}'`, () => {
      expect(substringBefore(str, fragment)).toBe(expectedResult);
    })
  }

})
