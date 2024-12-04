import chunk from '../chunk.js';

describe('chunk', () => {
  test('splits an array into chunks of the given size', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result).toEqual([['c', 'd'], undefined]);
  });

  test('handles uneven chunks', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result).toEqual([['d', undefined, undefined], undefined]);
  });

  test('returns the entire array as one chunk if size is greater than array length', () => {
    const result = chunk(['a', 'b'], 5);
    expect(result).toEqual([['a', 'b', undefined, undefined, undefined]]);
  });

  test('returns an empty array when input array is empty', () => {
    const result = chunk([], 2);
    expect(result).toEqual([]);
  });

  test('handles default size parameter', () => {
    const result = chunk(['a', 'b', 'c']);
    expect(result).toEqual([['c'], undefined, undefined]);
  });
});
