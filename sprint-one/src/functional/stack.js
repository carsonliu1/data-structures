var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let total = 0
  let stack = 0
  let length = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[total] = value
    total++
    length++
    stack = total - 1
  };

  someInstance.pop = function() {
    if (length > 0) {
      length--
    }

    let lastObj = storage[stack]
    delete storage[stack]
    stack--
    return lastObj
  };

  someInstance.size = function() {
    return length
  };

  return someInstance;
};
