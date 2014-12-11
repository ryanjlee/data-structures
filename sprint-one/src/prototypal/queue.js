var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.start = 0;
  someInstance.end = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  if (this.end - this.start > 0) {
    var value = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return value;
  }
};

queueMethods.size = function() {
  return this.end - this.start;
};
