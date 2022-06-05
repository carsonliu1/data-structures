var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this.contains(item)) {
    this._storage.push(item)
  }
};

setPrototype.contains = function(item) {
  if (this._storage.includes(item)) {
    return true
  }
  return false
};

setPrototype.remove = function(item) {
  for (let x = 0; x < this._storage.length; x++) {
    if (this._storage[x] === item) {
      this._storage.splice(x,1)
      break
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
