var BinarySearchTree = function(value){
  var tree = {};
  tree.left = null;
  tree.right = null;
  tree.value = value;
  tree.contains = binarySearchTreeMethods.contains;
  tree.insert = binarySearchTreeMethods.insert;
  tree.depthFirstLog = binarySearchTreeMethods.depthFirstLog;
  return tree;
};

var binarySearchTreeMethods = {};
binarySearchTreeMethods.insert = function(value) {
  var checkNode = function(node) {
    if (value > node.value) {
      if (node.right) {
        checkNode(node.right);
      } else {
        node.right = BinarySearchTree(value);
      }
    }
    if (value < node.value) {
      if (node.left) {
        checkNode(node.left);
      } else {
        node.left = BinarySearchTree(value);
      }
    }
  };
  checkNode(this);
};

binarySearchTreeMethods.contains = function(value) {
  var check = function(node) {
    if (value === node.value) {
      return true;
    }
    if (value < node.value && node.left) {
      return check(node.left);
    }
    if (value > node.value && node.right) {
      return check(node.right);
    }
    return false;
  };
  return check(this);
};

binarySearchTreeMethods.depthFirstLog = function(cb) {
  var check = function(node) {
    cb(node.value);
    // check if node has children
    if (node.left) {
      // if so, pass the child to cb
      check(node.left);
    }
    if (node.right) {
      check(node.right);
    }
  };
  check(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
