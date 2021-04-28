/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function increasingBST(root: TreeNode | null): TreeNode | null {
  const hair = new TreeNode(-1);
  let cur_node = hair;
  const in_order = (node) => {
    if (!node) return;
    in_order(node.left);
    cur_node.right = node;
    node.left = null;
    cur_node = node;
    in_order(node.right);
  };
  in_order(root);
  return hair.right;
}
