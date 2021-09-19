// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      let sums = []
      branchSumsHelper(root, 0, sums);
      return sums;
  }
  
  function branchSumsHelper(node, current_sum, sums) {
      if(node === null) return
      if(node.left === null && node.right === null) {
          sums.push(current_sum + node.value)
          return;
      }
      let added_sum = current_sum + node.value;
      branchSumsHelper(node.left, added_sum, sums)
      branchSumsHelper(node.right, added_sum, sums)
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  
  