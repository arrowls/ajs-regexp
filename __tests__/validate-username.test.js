import Validator from '../src/Validator';

test.each([
  ['netology123a', true],
  ['someusername', true],
  ['a_j-s', true],
  ['github___arrowls', true],
  ['x_test_x', true],
])('should return true for %s', (username, expected) => {
  expect(Validator.validateUsername(username)).toBe(expected);
});

test.each([
  ['four4444numbers', false],
  ['3startfromnumber', false],
  ['=invalid*characters=', false],
  ['endswithnumber4', false],
  ['nothing^wrong', false],
])('should return false for %s', (username, expected) => {
  expect(Validator.validateUsername(username)).toBe(expected);
});
