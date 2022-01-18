/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) { // my thoughts -> o(n^2)
    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];
        const anotherIndex = nums.lastIndexOf(another);
        if (anotherIndex > i) {
            return [i, anotherIndex];
        }
    }
};

var twoSum = function (nums, target) { // 空间换时间：一轮操作中记录可用数据减少多轮操作
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];
        if (numMap[another] > -1) {
            return [i, numMap[another]]
        } else {
            numMap[nums[i]] = i;
        }
    }
};
