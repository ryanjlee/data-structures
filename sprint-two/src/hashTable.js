var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check for info, if not there, set
  if (!this._storage.get(i)) {
    this._storage.set(i, [k, v]);
  }
  var tuple = this._storage.get(i);
  tuple.push(k, v);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, [null, null]);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
