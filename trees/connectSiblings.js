E -> F
F -> G

     A
    / \
   B -> C
  / \   / \
 D-> E  F-> G

Example of B:

B - C
/ \
D E


tree 
{
	value : string
	left : Node
	right: Node
	next: Node
}

var makeAdjConnections(tree) {

	let currentNode = tree;
	// base case
	if(currentNode === null) {
		return ;
	}

	let left = currentNode.left;
	let right = currentNode.right

	if(left !== null)
		left.next = right;
	
	makeAdjConnections(left);
	makeAdjConnections(right);
	return tree
}
