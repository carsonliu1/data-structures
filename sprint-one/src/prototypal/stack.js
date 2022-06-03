var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var methods = Object.create(stackMethods)
  methods.stack = 0
  methods.length = 0
  methods.total = 0
  methods.storage = {}

  return methods
};

var stackMethods = {};

stackMethods.pop = function () {
  if (this.length !== 0) {
    this.length--
  }

  let last = this.storage[this.stack]
  delete this.storage[this.stack]
  this.stack--
  return last
}

stackMethods.push = function(val) {
  this.storage[this.total] = val
  this.total++
  this.stack = this.total - 1
  this.length++
}

stackMethods.size = function() {
  return this.length
}


