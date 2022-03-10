// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> false
// function isPalindrome(10) --> false
function isPalindrome(x) {
    if (typeof x !== 'string') x = x.toString();
    let s = x,
        n = s.length - 1,
        i = 0,
        j = n;
    while (i <= j) {
        while (i <= n && isNonAlphaNumeric(s.charCodeAt(i))) {
            i++;
        }
        while (j >= 0 && isNonAlphaNumeric(s.charCodeAt(j))) {
            j--;
        }
        // if i and j cross each other then return true as no alphanumeric found between them
        if (i > j) return true;
        if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase())
            return false;
        i++;
        j--;
    }
    return true;
}

//return true if no. is not an alphabet or digit otherwise return false
const isNonAlphaNumeric = (ch) => {
    if (
        (ch <= 'z'.charCodeAt(0) && ch >= 'a'.charCodeAt(0)) ||
        (ch <= '9'.charCodeAt(0) && ch >= '0'.charCodeAt(0)) ||
        (ch <= 'Z'.charCodeAt(0) && ch >= 'A'.charCodeAt(0))
    )
        return false;
    return true;
};

console.log(isPalindrome('racecarj'));
console.log(isPalindrome('ra ; ; ; c e c a r '));

module.exports = isPalindrome;
