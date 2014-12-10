var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // represents numeric key
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    // keep track of the first and last items in object
    if (counter > 0) {
      var value = storage[counter];
      
      delete storage[counter];
      return value;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
debug(Queue("hello"));