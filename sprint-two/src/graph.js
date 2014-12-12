

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  // assign item to key and assign edges to value
  this.storage[node] = [];
};

Graph.prototype.contains = function(node){
  // check if item exists
  // iterate through storage, and check each key
  for (var key in this.storage) {
    if (key === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // add value of fromNode to edge in toNode
  this.storage[toNode].push(fromNode);
  this.storage[fromNode].push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      this.storage[fromNode][i].splice(i, 0);
    }
  }

  for (var j = 0; j < this.storage[toNode].length; j++) {
    if (this.storage[toNode][j] === fromNode) {
      this.storage[toNode][j].splice(j, 0);
    }
  }

};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



