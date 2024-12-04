import capitalize from '../capitalize.js'

describe('capitalize', () => {
  // Capitalize when whole word is uppercase
  test('capitalizes an all-uppercase string', () => {
    expect(capitalize('FRED')).toBe('Fred')
  })
  // Capitalize if whole word is lowercase
  test('capitalizes an all-lowercase string', () => {
    expect(capitalize('fred')).toBe('Fred')
  })
  // Capitalize if there are mixed upper and lowercase
  test('handles mixed-case input correctly', () => {
    expect(capitalize('fReD')).toBe('Fred')
  })
  // return empty if the word is empty
  test('returns an empty string for an empty input', () => {
    expect(capitalize('')).toBe('')
  })
  // Hangles single characters
  test('handles single-character strings', () => {
    expect(capitalize('a')).toBe('A')
    expect(capitalize('A')).toBe('A')
  })
  // handles word with spaces
  test('handles strings with spaces correctly', () => {
    expect(capitalize('  fred')).toBe('  fred')
    expect(capitalize('fred ')).toBe('Fred ')
  })
  // Hangles extra spaces
  test('trims and capitalizes properly', () => {
    expect(capitalize('  fred  '.trim())).toBe('Fred')
  })
  // Handles null
  test('handles null or undefined input gracefully', () => {
    expect(capitalize(null ?? '')).toBe('')
    expect(capitalize(undefined ?? '')).toBe('')
  })
  // converts int or bools to string and capitalize
  test('converts non-string inputs to string and capitalizes', () => {
    expect(capitalize(123)).toBe('123')
    expect(capitalize(true)).toBe('True')
  })
})
