var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.stack = 0
  this.length = 0
  this.count = 0
};

Stack.prototype.push = function(val) {
  this.storage[this.count] = val
  this.count++
  this.length++
  this.stack = this.count - 1
}

Stack.prototype.pop = function() {
  if (this.length !== 0) {
    this.length--
  }

  let last = this.storage[this.stack]
  delete this.storage[this.stack]
  this.stack--
  return last
}

Stack.prototype.size = function() {
  return this.length
}

