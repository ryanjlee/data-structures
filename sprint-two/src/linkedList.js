var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    newNode.next = list.tail;
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next =  newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    var check = function(obj) {
      if (obj.value == target) {
        return true;
      }
      if (obj.next === list.tail) {
      check(obj.next);
      }
      return false;
    };
    check(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
