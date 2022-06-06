

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //create the tuple = [k, v]
  //store the tuple into the storage array at "index"
  //
  if (this._storage.get(index)) {
    for (let x = 0; x < this._storage.get(index).length; x+=2) {
      if (this._storage.get(index)[x] === k) {
        this._storage.get(index)[x + 1] = v
        return
      }
    }
  }
  this._storage.set(index, v, k)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use the index provide and search in the storage array
  for (let x = 0; x < this._storage.get(index).length; x+=2) {
    if (this._storage.get(index)[x] === k) {
      return this._storage.get(index)[x + 1]
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //set the index value of the storage array to undefined
  if (this._storage.get(index)) {
    for (let x = 0; x < this._storage.get(index).length; x+=2) {
      if (this._storage.get(index)[x] === k) {
        this._storage.get(index).splice(x, 2);
        return
      }
    }
  }
}





/*
 * Complexity: What is the time complexity of the above functions?
 */


