/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
    function isPalindrome(arr) {
        return arr.join('') === [...arr].reverse().join(''); // key point, 直接arr.reverse是会影响原有数组的
    }

    let i = 0;
    let j = 0;
    let temp = [];
    let count = 0;

    for(i = 0; i < s.length; i++) {
        for(j = i; j < s.length; j++) {
            temp = s.substring(i , j + 1).split('');
            if (isPalindrome(temp)) {
                count++;
            }
        }
    }

    return count;
};