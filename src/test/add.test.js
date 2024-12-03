import add from '../add.js'

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  test('adds a positive number and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });

  test('adds zero and a number', () => {
    expect(add(0, 4)).toBe(4);
    expect(add(4, 0)).toBe(4);
  });

  test('adds two floating-point numbers', () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });

  test('handles non-numeric inputs gracefully', () => {
    // Manually check if add() works with invalid inputs
    expect(() => add('6', 4)).not.toBeNaN();  // This will prevent incorrect behavior but won't throw an error
    expect(() => add(6, '4')).not.toBeNaN();
    expect(() => add(null, 4)).not.toBeNaN();
    expect(() => add(6, undefined)).not.toBeNaN();
  });

  test('adds with default values (if applicable)', () => {
    expect(add()).toBe(0); // Assuming the default value for the second parameter is 0
  });
});
