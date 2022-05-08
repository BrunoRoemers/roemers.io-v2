import removeEnd from "./remove-end";

describe('removeEnd', () => {

  const cases: [string, string, string][] = [
    [null, 'aa', ''],
    [undefined, 'aa', ''],
    ['', 'aa', ''],
    ['abc', null, 'abc'],
    ['abc', undefined, 'abc'],
    ['abc', '', 'abc'],
    ['abc', ' ', 'abc'],
    ['abc ', ' ', 'abc'],
    ['hello world', 'world', 'hello '],
    ['hello word', 'world', 'hello word'],
    ['abc', 'c', 'ab'],
    ['abc', 'b', 'abc'],
  ];

  for (const [str, postfix, expectedResult] of cases) {
    it(`when str = '${str}' and postfix = '${postfix}' the return value should be '${expectedResult}'`, () => {
      expect(removeEnd(str, postfix)).toBe(expectedResult);
    })
  }

})
