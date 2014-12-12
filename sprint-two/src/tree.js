var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var result = false;
  var searchNodes = function(node) {
    if (target === node.value) {
      return true;
    }
    // iterate through children array
    for (var i = 0; i < node.children.length; i++) {
      if (result) {
        return true;
      }
      result = searchNodes(node.children[i]);
    }
    return result;
  };

  return searchNodes(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
