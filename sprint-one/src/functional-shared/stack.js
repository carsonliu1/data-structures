var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let methods = {
    stack: 0,
    length: 0,
    total: 0,
    storage: {},
  }
  _.extend(methods, stackMethods)

  return methods
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.total] = value
  this.total++
  this.length++
  this.stack = this.total - 1
}

stackMethods.pop = function() {
  if (this.length !== 0) {
    this.length--
  }
  let lastObj = this.storage[this.stack]
  delete this.storage[this.stack]
  this.stack--
  return lastObj
}

stackMethods.size = function() {
  return this.length
}


