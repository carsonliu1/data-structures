var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  let methods = {}
  methods.storage = {}
  methods.length = 0
  methods.total = 0
  methods.queue = 0
  _.extend(methods, queueMethods)
  // but try not not reference your old code in writing the new style.
  return methods
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.total] = value
  this.total++
  this.length++
}

queueMethods.dequeue = function() {
  if (this.length > 0) {
    this.length--
  }

  var firstObj = this.storage[this.queue]
  delete this.storage[this.queue]
  this.queue++
  return firstObj
}

queueMethods.size = function () {
  return this.length
}


