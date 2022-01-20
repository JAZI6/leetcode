/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) { // my thoughts
    let vals = [root];

    function isCorrectNode(nums) {
        return nums.join('') === [...nums].reverse().join('');
    }

    while (vals.length) {
        let temp = [];
        while (vals.length) {
            let cur = vals.shift();
            cur && temp.push(cur.left, cur.right);
        }
        if (temp.every(item => item === null)) {
            break;
        }
        if (!isCorrectNode(temp.map(item => item === null ? 'X' : item.val))) {
            return false;
        }
        vals = temp;
    }

    return true;
};

var isSymmetric = function (root) { // 递归
    function isSym(root1, root2){
        if (root1 == null && root2 == null) {
            return true;
        } else if (root1 == null || root2 == null || root1.val != root2.val) {
            return false;
        }

        return isSym(root1.left, root2.right) && isSym(root1.right, root2.left);
    }
    return isSym(root.left, root.right);
}