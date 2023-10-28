const isAnagram = require('./anagram');

test('Anagram function exists', () => {
    expect(isAnagram).toBeDefined();
});

test('Anagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"Cinema is an anagram of iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
