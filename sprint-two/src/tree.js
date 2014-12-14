var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){

  // var searchNodes = function(node, found) {
  //   if (target === node.value) {
  //     return true;
  //   }
  //   for (var i = 0; i < node.children.length; i++) {
  //     return searchNodes(node.children[i]);
  //   }
  // };

  // return searchNodes(this);

  var result = false;
  var searchNodes = function(node) {
    if (target === node.value) {
      return true;
    }
    // iterate through children array
    for (var i = 0; i < node.children.length; i++) {
      result = searchNodes(node.children[i]);
      if (result) {
        return true;
      }
    }
    return result;
  };
  return searchNodes(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 *   .addChild: constant
 *   .contains: linear
 */
