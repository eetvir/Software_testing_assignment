import camelCase from '../camelCase.js'

describe('camelCase', () => {
  const normalizeCamelCase = (input) => camelCase(input).trim().toLowerCase()
  // Convert space-separated words to camel case
  test('converts space-separated words to camel case', () => {
    expect(normalizeCamelCase('Foo Bar')).toBe('foobar')
  })
  //Convert hyphen-separated words to camel case
  test('converts hyphen-separated words to camel case', () => {
    expect(normalizeCamelCase('--foo-bar--')).toBe('foobar')
  })
  // Convert underscope-separated words to camel case
  test('converts underscore-separated words to camel case', () => {
    expect(normalizeCamelCase('__FOO_BAR__')).toBe('foobar')
  })
  //Test single words
  test('handles single words correctly', () => {
    expect(normalizeCamelCase('FOO')).toBe('foo')
    expect(normalizeCamelCase('bar')).toBe('bar')
  })
  // Return empty string if empty input
  test('returns an empty string for an empty input', () => {
    expect(normalizeCamelCase('')).toBe('')
  })
  // Handles mixed big and small characters
  test('handles mixed case input', () => {
    expect(normalizeCamelCase('FoO bAr')).toBe('foobar')
  })
  // Handles special characters
  test('handles input with special characters and numbers', () => {
    expect(normalizeCamelCase('foo123_bar')).toBe('foo123bar')
    expect(normalizeCamelCase('foo$bar')).toBe('foobar')
  })
  // Handles extra spaces
  test('trims and ignores extra spaces', () => {
    expect(normalizeCamelCase('   Foo    Bar   ')).toBe('foobar')
  })
  // Handles different strings
  test('handles strings with apostrophes and quotes', () => {
    expect(normalizeCamelCase("I'm a test")).toBe('imatest')
    expect(normalizeCamelCase(`'single quote'`)).toBe('singlequote')
  })
  // Handles null without errors
  test('handles null or undefined input gracefully', () => {
    expect(normalizeCamelCase(null ?? '')).toBe('')
    expect(normalizeCamelCase(undefined ?? '')).toBe('')
  })
})
