/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) { // my thoughts
    if (!s) {
        return 0;
    }

    if (s.length === 1) {
        return 1;
    }

    if (s.length === 2) {
        return s[0] !== s[1] ? 2 : 1;
    }

    let i = 0;
    let j = 0;
    let temp = [];
    let maxLen = 0;

    for(i = 0; i < s.length; i++) {
        temp = [s[i]];
        for(j = i + 1; j < s.length; j++) {
            if (temp.includes(s[j])) {
                break;
            } else {
                temp.push(s[j]);
            }
        }
        maxLen = Math.max(maxLen, temp.length);
    }

    return maxLen;
};

var lengthOfLongestSubstring = function(s) { // 时间复杂度低
    let maxLen = 0;
    let arr = [];
    for(let i of s) {
        let exsitIndex = arr.indexOf(i)
        if(exsitIndex > -1) {
            arr.splice(0, exsitIndex + 1)
        }
        arr.push(i)
        maxLen = Math.max(maxLen, arr.length)
    }
    return maxLen;
};