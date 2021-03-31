var LinkedList = function() {
  this._head = null;
  this._size = 0;
};

var Node = function(data, next = null) {
  this._data = data;
  this._next = next;
};

LinkedList.prototype.insertFirst = function(data) {
  var node = new Node(data, this._head);
  this._head = node;
  this._size++;

  console.log(this);
};

LinkedList.prototype.insertLast = function(data) {
  var current = this._head;

  if (!this._head) {
    return this.insertFirst(data);
  }

  while (current._next) {
    current = current._next;
  }

  current._next = new Node(data);
  this._size++;
  console.log(this);
};

LinkedList.prototype.getIndex = function(data) {
  var current = this._head;

  if (!current) {
    return null;
  }

  var index = 0;

  while (current) {
    if (current._data === data) {
      return index;
    } else {
      current = current._next;
      index++;
    }
  }
  return null;
};

LinkedList.prototype.insertAt = function(data, index) {
  if (index === 0) {
    this.insertFirst(data);
  }

  if (index > this._size) {
    return null;
  }

  var node = new Node(data);
  var current = this._head._next;
  var previous = this._head;
  var count = 0;

  while (count < index - 1) {
    count++
    current = current._next;
    previous = previous._next;
  }

  previous._next = node;
  node._next = current;
  this._size++
  return this;
};

LinkedList.prototype.contains = function(data) {

};

/*
LinkedList = {
  head: {
    data: 3,
    next: {
      data: 5,
      next: {
        data: 100,
        next: null;
      }
    }
  }
}
*/