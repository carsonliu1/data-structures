var BinarySearchTree = function(value) {
  var tree = Object.create(bstMethod)
  tree.left = null
  tree.right = null
  tree.value = value
  return tree
};

var bstMethod = {};

bstMethod.insert = function(value) {
  //make a var called queue and set the queue to the root of the tree
  //loop through the tree and check whether the value we want to put in is greater or less than the node value
  var newNode = BinarySearchTree(value)
  if (this.value === null) {
    this.value = newNode;
  }
  let curr = this
  while(curr) {
    if (curr.value > value) {
      if (!curr.left) {
        curr.left = newNode
          return
        }
      curr = curr.left
    } else {
      if (!curr.right) {
        curr.right = newNode
          return
        }
      curr = curr.right
    }
  }
}

bstMethod.contains = function(value) {
  let curr = this
  while(curr) {
    if (curr.value === value) return true
    if (curr.value > value) {
      curr = curr.left
    } else {
      curr = curr.right
    }
  }
  return false
}
bstMethod.depthFirstLog = function(cb) {
  let stack = [this]
  while(stack.length > 0) {
    let curr = stack.pop()
    curr.value = cb(curr.value)
    if(curr.right) stack.push(curr.right)
    if(curr.left) stack.push(curr.left)
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
