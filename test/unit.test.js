'use strict';

const chai = require('chai');
// const assert = require('chai').assert;

const addNumbers = (a, b) => a + b;

describe('1. Test Suit - Unit Test', () => {
  it('should return 12', () => {
    chai.assert.equal(addNumbers(4, 8), 12);
  });
});
