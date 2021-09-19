function nodeDepths(root, depth = 0) {
  /* Iterative approach using stack */
  let sumOfDepths = 0
  let stack = [{ node: root, depth: 0 }]
  while (stack.length > 0) {
    let nodeInfo = stack.pop()
    let { node, depth } = nodeInfo
    if (node === null) {
      continue
    }
    sumOfDepths += depth
    stack.push({ node: node.left, depth: depth + 1 })
    stack.push({ node: node.right, depth: depth + 1 })
  }
  return sumOfDepths

  /* recursive approach */
  // if(root === null) return 0;
  // return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths
