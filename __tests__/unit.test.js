// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2



//isPhoneNumber tests
test('check if 858-610-0457 is true', () => {
    expect(functions.isPhoneNumber('858-610-0457')).toBe(true);
});

test('check if (858)610-0457 is true', () => {
    expect(functions.isPhoneNumber('(858)610-0457')).toBe(true);
});

test('check if 8586100457 is false', () => {
    expect(functions.isPhoneNumber('8586100457')).toBe(false);
});

test('check if 0000000000 is false', () => {
    expect(functions.isPhoneNumber('0000000000')).toBe(false);
});



//isEmail tests
test('check if WesleyWang@gmail.com is true', () => {
    expect(functions.isEmail('WesleyWang@gmail.com')).toBe(true);
});

test('check if Wesley@UCSD.edu is true', () => {
    expect(functions.isEmail('Wesley@UCSD.edu')).toBe(true);
});

test('check if WesleyWanggmail.com is false', () => {
    expect(functions.isEmail('WesleyWanggmail.com')).toBe(false);
});

test('check if Wesley@UCSD.edu is false', () => {
    expect(functions.isEmail('Wesley@UCSD')).toBe(false);
});



//isDate tests
test('check if 09/26/2001 is true', () => {
    expect(functions.isDate('09/26/2001')).toBe(true);
});

test('check if 9/06/01 is true', () => {
    expect(functions.isDate('9/06/2001')).toBe(true);
});

test('check if 9/06/01 is false', () => {
    expect(functions.isDate('9/06/01')).toBe(false);
});

test('check if 11111 is false', () => {
    expect(functions.isDate('11111')).toBe(false);
});



//isPassword tests
test('check if xhUD_39Cd is true', () => {
    expect(functions.isStrongPassword('xhUD_39Cd')).toBe(true);
});

test('check if Triseratops is true', () => {
    expect(functions.isStrongPassword('Triseratops')).toBe(true);
});

test('check if 123456789 is false', () => {
    expect(functions.isStrongPassword('123456789')).toBe(false);
});

test('check if 000 is false', () => {
    expect(functions.isStrongPassword('000')).toBe(false);
});



//isHexColor tests
test('check if #FFF is true', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('check if FFFFFF is true', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('check if F341940 is false', () => {
    expect(functions.isHexColor('F341940')).toBe(false);
});

test('check if #FA23 is false', () => {
    expect(functions.isHexColor('#FA23')).toBe(false);
});