var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newMethods = Object.create(queueMethods)
  newMethods.storage = {}
  newMethods.queue = 0
  newMethods.total = 0
  newMethods.length = 0
  return newMethods
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



