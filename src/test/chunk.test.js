import chunk from '../chunk.js';


describe('chunk', () => {
  // Split array into chunks when size is given
  test('splits an array into chunks of the given size', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result).toEqual([['c', 'd'], undefined]);
  });
  // Handles uneven chunks
  test('handles uneven chunks', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result).toEqual([['d', undefined, undefined], undefined]);
  });
  // returns array if one chunk is greater than array length
  test('returns the entire array as one chunk if size is greater than array length', () => {
    const result = chunk(['a', 'b'], 5);
    expect(result).toEqual([['a', 'b', undefined, undefined, undefined]]);
  });
  //returns empty array if input is empty
  test('returns an empty array when input array is empty', () => {
    const result = chunk([], 2);
    expect(result).toEqual([]);
  });
  // handes default size
  test('handles default size parameter', () => {
    const result = chunk(['a', 'b', 'c']);
    expect(result).toEqual([['c'], undefined, undefined]);
  });
});
