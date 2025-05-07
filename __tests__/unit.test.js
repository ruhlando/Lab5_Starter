// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests: 

test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});


// isEmail tests:

test('valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email: user123@domain.org', () => {
  expect(isEmail('user123@domain.org')).toBe(true);
});

test('invalid email: test@.com', () => {
  expect(isEmail('test@.com')).toBe(false);
});

test('invalid email: @domain.com', () => {
  expect(isEmail('@domain.com')).toBe(false);
});


// isStrongPassword tests

test('valid password: Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('valid password: a_b1', () => {
  expect(isStrongPassword('a_b1')).toBe(true);
});

test('invalid password: 123abc', () => {
  expect(isStrongPassword('123abc')).toBe(false); // starts with number
});

test('invalid password: a', () => {
  expect(isStrongPassword('a')).toBe(false); // too short
});


// isDate tests

test('valid date: 12/25/2023', () => {
  expect(isDate('12/25/2023')).toBe(true);
});

test('valid date: 1/1/1999', () => {
  expect(isDate('1/1/1999')).toBe(true);
});

test('invalid date: 12/25/23', () => {
  expect(isDate('12/25/23')).toBe(false); // year must be 4 digits
});

test('invalid date: 2023/12/25', () => {
  expect(isDate('2023/12/25')).toBe(false); // wrong format
});


// isHexColor tests

test('valid hex color: #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex color: 123ABC', () => {
  expect(isHexColor('123ABC')).toBe(true);
});

test('invalid hex color: #ggg', () => {
  expect(isHexColor('#ggg')).toBe(false); // invalid characters
});

test('invalid hex color: #12345', () => {
  expect(isHexColor('#12345')).toBe(false); // invalid length
});