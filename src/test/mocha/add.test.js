import add from '../../add.js';
import { expect } from 'chai';

describe('add', () => {
  // add two positive numbers
  it('adds two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });

  // add two negative numbers
  it('adds two negative numbers', () => {
    expect(add(-6, -4)).to.equal(-10);
  });

  // add positive and negative number
  it('adds a positive number and a negative number', () => {
    expect(add(6, -4)).to.equal(2);
  });

  // add zero + number
  it('adds zero and a number', () => {
    expect(add(0, 4)).to.equal(4);
    expect(add(4, 0)).to.equal(4);
  });

  // adds two float numbers
  it('adds two floating-point numbers', () => {
    expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.0001);
  });

  // handles non-numeric numbers
  it('handles non-numeric inputs gracefully', () => {
    expect(() => add('6', 4)).not.to.throw();
    expect(() => add(6, '4')).not.to.throw();
    expect(() => add(null, 4)).not.to.throw();
    expect(() => add(6, undefined)).not.to.throw();
  });

  // handles if add is empty
  it('adds with default values (if applicable)', () => {
    expect(add()).to.equal(0);
  });
});
