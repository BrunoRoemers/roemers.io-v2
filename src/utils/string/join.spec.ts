import join from "./join";

describe('join', () => {

  it('joins "aaa", "bbb" as "aaa bbb"', () => {
    expect(join('aaa', 'bbb')).toBe('aaa bbb');
  })

  it('joins "aaa", undefined, "bbb" as "aaa bbb"', () => {
    expect(join('aaa', undefined, 'bbb')).toBe('aaa bbb');
  })

  it('joins "aaa", null, "bbb" as "aaa bbb"', () => {
    expect(join('aaa', null, 'bbb')).toBe('aaa bbb');
  })

  it('joins "aaa", <spaces>, "bbb" as "aaa bbb"', () => {
    expect(join('aaa', '  ', 'bbb')).toBe('aaa bbb');
  })

})
