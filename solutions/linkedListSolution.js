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

LinkedList.prototype.getAt = function(index) {
  if (index > this._size) {
    return null;
  }

  var current = this._head;
  var count = 0;

  while (current) {
    if (index === count) {
      return current._data;
    }
    count++
    current = current._next;
  }

  return null;
}

LinkedList.prototype.contains = function(data) {
  var current = this._head;

  if (!current) {
    return false;
  }

  while (current) {
    if (current._data === data) {
      return true;
    }
    current = current._next;
  }
  return false;
};

LinkedList.prototype.printList = function() {
  var str = '';
  var current = this._head;

  while (current) {
    str += `${current._data} --> `
    current = current._next;
  }

  return str.trim();
};

LinkedList.prototype.remove = function(data) {
  if (!this.contains(data)) {
    return null;
  }

  if (this._size === 1) {
    this._head = null;
    return;
  }

  var current = this._head._next;
  var previous = this._head;
  var index = this.getIndex(2);

  var count = 0;

  while (count !== index) {
    if (current._data === data) {
      current = current._next;
      break;
    }
    count++
    current = current._next;
    previous = previous._next;
  }
  previous._next = current;
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