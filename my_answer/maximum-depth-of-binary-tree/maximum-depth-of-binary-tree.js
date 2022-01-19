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
 * @return {number}
 */
var maxDepth = function (root) { // my thoughts
    let res = 0;
    let count = 0;

    function traverse(root) {
        if (!root) {
            res = Math.max(res, count);
            return;
        }

        count++;
        traverse(root.left);
        // root.val;
        traverse(root.right);
        count--;
    }
    traverse(root);

    return res;
};

var maxDepth = function (root) { // good idea
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
