function findClosestValueInBst(tree, target) {
  return findClosestValueHelper(tree, target, tree.value)
}

function findClosestValueHelper(tree, target, closest) {
  /* recursive approach */
  // if(tree === null)
  // 	return closest;
  // if(Math.abs(target - closest) > Math.abs(target - tree.value))
  // 	closest = tree.value
  // if(target < tree.value)
  // 	return findClosestValueHelper(tree.left, target, closest)
  // else if(target > tree.value)
  // 	return findClosestValueHelper(tree.right, target, closest)
  // else
  // 	return closest;

  /* iterative approach */
  currentNode = tree

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value))
      closest = currentNode.value
    if (target < currentNode.value) currentNode = currentNode.left
    else if (target > currentNode.value) currentNode = currentNode.right
    else break
  }
  return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst
