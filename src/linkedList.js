var LinkedList = function() {
  this._head = null;
  this._size = 0;
};

var Node = function(data, next = null) {
  this._data = data;
  this._next = next;
};
