var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value)
    if (!list.head && !list.tail) {
      list.head = node
      list.tail = node
    } else {
      list.tail.next = node
      list.tail = node
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return null
    }
    let temp = list.head.value
    list.head = list.head.next
    return temp
  };

  list.contains = function(target) {
    if (!list.head) {
      return null
    }
    let curr = list.head
    while(curr) {
      if (curr.value === target) {
        return true
      }
      curr = curr.next
    }
    return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
