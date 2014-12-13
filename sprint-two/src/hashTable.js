var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check for info, if not there, set
  if (!this._storage.get(i)) {
    this._storage.set(i, [k, v]);
  } else {
    this._storage.get(i).push(k, v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var index = this._storage.get(i);
  for (var i = 0; i < index.length; i++) {
    if (index[i] === k) {
      return index[i + 1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var index = this._storage.get(i);
  for (var i = 0; i < index.length; i++) {
    if (index[i] === k) {
      index[i + 1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
