function reverse(toReverse) {
    return toReverse.split('').reduce((rev, char) => char + rev, '');
}
module.exports = reverse;