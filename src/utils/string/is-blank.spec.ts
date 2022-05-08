import isBlank from "./is-blank"

describe('isBlank', () => {
  
  it('returns true when string = undefined', () => {
    expect(isBlank(undefined)).toBe(true);
  })

  it('returns true when string = null', () => {
    expect(isBlank(null)).toBe(true);
  })

  it('returns true when string = <empty string>', () => {
    expect(isBlank('')).toBe(true);
  })

  it('returns true when string = <string with only spaces>', () => {
    expect(isBlank('   ')).toBe(true);
  })

  it('returns false when string = abc', () => {
    expect(isBlank('abc')).toBe(false);
  })
  
})
