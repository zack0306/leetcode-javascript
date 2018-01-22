/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];
    var q = [];
    var ans = [];
    var onelvl = [];
    q.push(root);
    var curlvl = 1;
    var nextlvl = 0;
    while (q.length > 0) {
        var tmp = q.shift();
        onelvl.push(tmp.val);
        curlvl--;

        if (tmp.left) {
            q.push(tmp.left);
            nextlvl++;
        }
        if (tmp.right) {
            q.push(tmp.right);
            nextlvl++;
        }

        if (curlvl === 0) {
            ans.push(onelvl);
            onelvl = [];
            curlvl = nextlvl;
            nextlvl = 0;
        }
    }
    return ans;

};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    var q = [], helperQ = [];
    if (root === null) return [];
    q.push(root);

    var oneResult = [];
    while(q.length !== 0 || helperQ.length !== 0) {
        while (q.length !== 0) {
            var tmp = q.shift();
            oneResult.push(tmp.val);
            if (tmp.left) helperQ.push(tmp.left);
            if (tmp.right) helperQ.push(tmp.right);
        }
        q = helperQ;
        helperQ = [];
        result.push(oneResult.slice());
        oneResult = [];
    }

    return result;
};
