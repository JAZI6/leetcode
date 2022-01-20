/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) { // my thoughts
    const targetMap = ['()', '{}', '[]'];
    const stack = [];
    for (item of s) {
        stack.push(item);
        if (stack.length > 1) {
            let lastIndex = stack.length - 1;
            let last2Str = `${stack[lastIndex - 1]}${stack[lastIndex]}`;
            if (targetMap.includes(last2Str)) {
                stack.pop();
                stack.pop();
            }
        }
    }

    return !stack.length;
};