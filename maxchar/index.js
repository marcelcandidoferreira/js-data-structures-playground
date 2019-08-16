// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    // Approach 01
    // const charMap = {};
    // for (let char of str) {
    //     charMap[char] = charMap[char] + 1 || 1;
    // }

    // let maxPosition = 0;
    // let maxChar = '';
    // for (let char in charMap) {
    //     if (charMap[char] > maxPosition) {
    //         maxPosition = charMap[char];
    //         maxChar = char;
    //     } 
    // }
    // return maxChar;


    //Approach 02
    const charMap = {};
    for (let i = 0; i < str.split('').length; i++) {
        charMap[str[i]] = charMap[str[i]] + 1 || 1;
    }

    let maxPosition = 0;
    let maxChar = '';
    for (let char in charMap) {
        if (charMap[char] > maxPosition) {
            maxPosition = charMap[char];
            maxChar = char;
        } 
    }
    return maxChar;
}

module.exports = maxChar;
