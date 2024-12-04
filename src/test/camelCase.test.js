import camelCase from '../camelCase.js'

describe('camelCase', () => {
  
  // Convert space-separated words to camel case
  test('converts space-separated words to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar')
  })
  //Convert hyphen-separated words to camel case
  test('converts hyphen-separated words to camel case', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar')
  })
  // Convert underscope-separated words to camel case
  test('converts underscore-separated words to camel case', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  })
  //Test single words
  test('handles single words correctly', () => {
    expect(camelCase('FOO')).toBe('foo')
    expect(camelCase('bar')).toBe('bar')
  })
  // Return empty string if empty input
  test('returns an empty string for an empty input', () => {
    expect(camelCase('')).toBe('')
  })
  // Handles mixed big and small characters
  test('handles mixed case input', () => {
    expect(camelCase('FoO bAr')).toBe('fooBar')
  })
  // Handles special characters
  test('handles input with special characters and numbers', () => {
    expect(camelCase('foo123_bar')).toBe('foo123bar')
    expect(camelCase('foo$bar')).toBe('fooBar')
  })
  // Handles extra spaces
  test('trims and ignores extra spaces', () => {
    expect(camelCase('   Foo    Bar   ')).toBe('fooBar')
  })
  // Handles different strings
  test('handles strings with apostrophes and quotes', () => {
    expect(camelCase("I'm a test")).toBe('imatest')
    expect(camelCase(`'single quote'`)).toBe('singlequote')
  })
  // Handles null without errors
  test('handles null or undefined input gracefully', () => {
    expect(camelCase(null ?? '')).toBe('')
    expect(camelCase(undefined ?? '')).toBe('')
  })
})
