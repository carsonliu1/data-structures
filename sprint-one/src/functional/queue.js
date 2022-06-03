var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let total = 0
  let length = 0
  let queue = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[total] = value
    total++
    length++
  };

  someInstance.dequeue = function() {
    if (length > 0) {
      length--
    }
    let firstObj = storage[queue]
    delete storage[queue]
    queue++
    return firstObj
  };

  someInstance.size = function() {
    return length
  };

  return someInstance;
};
