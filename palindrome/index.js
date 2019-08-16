// Palindrome means:
// Giving a string, say if the reversed string is the same as not reversed
// -- Examples:
// palindrome('abba') === true
// palindrome('aebba') === falses
function palindrome(str) {

    // Solution 01
    //return (str.split('').reverse().join('') === str) ? true : false;

    // Solution 02
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;