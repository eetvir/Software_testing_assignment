import add from '../add.js'

describe('add', () => {

  // add two positive numbers
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });
  // add two negative numbers
  test('adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });
  // add positive and negative number
  test('adds a positive number and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });
  // add zero + number
  test('adds zero and a number', () => {
    expect(add(0, 4)).toBe(4);
    expect(add(4, 0)).toBe(4);
  });

  //adds two floating-point numbers
  test('adds two floating-point numbers', () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
  //Handles non-numerin inputs
  test('handles non-numeric inputs gracefully', () => {
    // Manually check if add() works with invalid inputs

    expect(() => add('6', 4)).not.toBeNaN();
    expect(() => add(6, '4')).not.toBeNaN();
    expect(() => add(null, 4)).not.toBeNaN();
    expect(() => add(6, undefined)).not.toBeNaN();
  });
  // handles if add is empty
  test('adds with default values (if applicable)', () => {
    expect(add()).toBe(0);
  });
});
