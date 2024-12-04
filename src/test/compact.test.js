import compact from '../compact.js';

describe('compact', () => {
  // removes false values from an array
  test('removes falsey values from an array', () => {
    expect(compact([0, 1, false, 2, 3])).toEqual([1,2,3]);
  });
  // return empty array if all values are false
  test('returns an empty array when all values are falsey', () => {
    expect(compact([0, false, null, undefined, '', NaN])).toEqual([]);
  });
  // return same array if it doesn't include any false values
  test('returns the same array when no falsey values are present', () => {
    const output = compact([1, 2, 3]);
    expect(output).toEqual([1,2, 3]);
  });
  // handles an empty array
  test('handles an empty array', () => {
    expect(compact([])).toEqual([]);
  });
  // removers NaN from array
  test('removes NaN from the array', () => {
    const output = compact([NaN, 1, 'hello', NaN]);
    expect(output).toEqual([1]);
  });
  // handles mixed datatypes
  test('handles mixed data types', () => {
    const output = compact([0, 'string', false, {}, [], 42]);
    expect(output).toEqual([42]);
  });
  // removes undefined and null values
  test('removes `undefined` and `null` values', () => {
    const output = compact([undefined, 1, null, 2, undefined]);
    expect(output).toEqual([1,2]);
  });
  // handles arrays with one false value
  test('handles arrays with only one falsey value', () => {
    expect(compact([0])).toEqual([]);
    expect(compact([false])).toEqual([]);
  })
});
