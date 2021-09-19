// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // pointer to the beginning/current node
  let currentNode = linkedList

  // loop through until you're at the end
  while (currentNode !== null) {
    // get next node
    let nextNode = currentNode.next
    // look for a non similar node value
    while (nextNode !== null && nextNode.value === currentNode.value) {
      nextNode = nextNode.next
    }

    // set the current node pointer to the next node
    // this also ensures you're only changing the link
    currentNode.next = nextNode
    // set the actual current node to the next node to continue through the list
    currentNode = nextNode
  }
  return linkedList
}

// Do not edit the lines below.
exports.LinkedList = LinkedList
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList
