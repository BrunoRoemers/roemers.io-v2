import substringBeforeLast from "./substring-before-last";

describe('substringBeforeLast', () => {

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
    ['hello beautiful world', ' ', 'hello beautiful'],
    ['abcd', 'bc', 'a'],
    ['abcd', 'a', ''],
    ['abcd', 'd', 'abc'],
    ['abcabcabc', 'abc', 'abcabc'],
    ['xyzabc', 'abc', 'xyz'],
    ['xyzabc123', 'abc', 'xyz'],
  ];

  for (const [str, fragment, expectedResult] of cases) {
    it(`when str = '${str}' and fragment = '${fragment}' the return value should be '${expectedResult}'`, () => {
      expect(substringBeforeLast(str, fragment)).toBe(expectedResult);
    })
  }

})
