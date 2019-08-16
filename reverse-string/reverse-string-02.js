function reverse(toReverse) {
    let reversed = '';

    for (let character of toReverse) {
        reversed = character + reversed;
    }

    return reversed;
}

module.exports = reverse;