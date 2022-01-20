/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) { // 递归超时
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
};

var climbStairs = function (n) { // 迭代
    const dp = [1, 2];
    for(let i = 2; i < n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n-1];
};