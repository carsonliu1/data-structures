var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods)
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let nodeVal = Tree(value)
  this.children.push(nodeVal)
  return nodeVal
};

treeMethods.contains = function(target) {
  let result = false

  var transverse = (node) => {
    // node.children.forEach((ele) => {
    //   if (ele.children.length > 0) {
    //     transverse(ele)
    //   }
    //   if (ele.value === target) result = true
    // })
    for (let x = 0; x < node.children.length; x++) {
      if (node.children[x].children.length > 0) {
        transverse(node.children[x])
      }
      if (node.children[x].value === target) result = true
    }
  }
  transverse(this)
  return result
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
