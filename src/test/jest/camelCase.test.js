import camelCase from '../../camelCase.js';

describe('camelCase', () => {
  test('converts space-separated words to camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });

  test('converts hyphen-separated words to camel case', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
  });

  test('converts underscore-separated words to camel case', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  test('handles single words correctly', () => {
    expect(camelCase('FOO')).toBe('foo');
    expect(camelCase('bar')).toBe('bar');
  });

  test('returns an empty string for an empty input', () => {
    expect(camelCase('')).toBe('');
  });

  test('handles mixed case input', () => {
    expect(camelCase('FoO bAr')).toBe('fooBar');
  });

  test('handles input with special characters and numbers', () => {
    expect(camelCase('foo123_bar')).toBe('foo123bar');
    expect(camelCase('foo$bar')).toBe('fooBar');
  });

  test('trims and ignores extra spaces', () => {
    expect(camelCase('   Foo    Bar   ')).toBe('fooBar');
  });

  test('handles strings with apostrophes and quotes', () => {
    expect(camelCase("I'm a test")).toBe('imATest');
    expect(camelCase(`'single quote'`)).toBe('singleQuote');
  });

  test('handles null or undefined input gracefully', () => {
    expect(camelCase(null ?? '')).toBe('');
    expect(camelCase(undefined ?? '')).toBe('');
  });
});