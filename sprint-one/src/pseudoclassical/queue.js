var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.length = 0
  this.queue = 0
  this.count = 0
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.count] = val
  this.count++
  this.length++
}

Queue.prototype.dequeue = function() {
  if (this.length !== 0) {
    this.length--
  }

  let first = this.storage[this.queue]
  delete this.storage[this.queue]
  this.queue++
  return first
}

Queue.prototype.size = function() {
  return this.length
}

