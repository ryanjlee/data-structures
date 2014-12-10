var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // represents numeric key
  var start = 0;
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    // keep track of the first and last items in object
    if (end - start > 0) {
      var value = storage[start];

      delete storage[start];
      start++;
      return value;
    }
  };

  someInstance.size = function(){
    return end - start;
  };

  return someInstance;
};
