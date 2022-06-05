

// Instantiate a new graph
var Graph = function() {
  this.nodes = {}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = []
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (this.nodes[node]) {
      return true
    }
  }
  return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes) {
    delete this.nodes[node]
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.nodes[fromNode] || !this.nodes[toNode]) {
    return false
  }
  if (this.nodes[fromNode].includes(toNode) && this.nodes[toNode].includes(fromNode)) {
    return true
  }
  return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(Number(toNode))
  this.nodes[toNode].push(Number(fromNode))
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let x = 0; x < this.nodes[fromNode].length; x++) {
    if (this.nodes[fromNode][x] === toNode) {
      this.nodes[fromNode].splice(x,1)
    }
  }
  for (let x = 0; x < this.nodes[toNode].length; x++) {
    if (this.nodes[toNode][x] === fromNode) {
      this.nodes[toNode].splice(x,1)
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.nodes).forEach((key) => cb(key))
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


