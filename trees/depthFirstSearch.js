// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  depthFirstSearch(array) {
    // push current node
    array.push(this.name)

    // go through child, and make recursive call for each child.
    for (let child of this.children) {
      child.depthFirstSearch(array)
    }
    return array
  }
}

// Do not edit the line below.
exports.Node = Node
