var LinkedList = function() {
  this._head = null;
  this._size = 0;
}

var Node = function(data, next = null) {
  this._data = data;
  this._next = next;
}

LinkedList.prototype.insertFirst = function(data) {
  this._head = new Node(data, this._head);
  this._size++;
};

LinkedList.prototype.insertLast = function(data) {
  var current = this._head;

  if (!current) {
    this._head = new Node(data);
    return;
  }

  while (current._next) {
    current = current._next;
  }

  current._next = new Node(data);
};

LinkedList.prototype.getIndex = function(data) {
  var current = this._head;

  if (!current) return -1;

  var itr = 0;

  while (current) {
    if (current._data === data) {
      return itr;
    }
    itr++
    current = current._next;
  }

  return -1;
};

LinkedList.prototype.insertAt = function(data, index) {
  var current = this._head;
  var node = new Node(data);
  var previous = null;
  var itr = 0;

  while (current) {
    if (itr === index) {
      if (!previous) {
        this._head = node;
        node._next = current;
        return;
      } else {
        previous._next = node;
        node._next = current;
        return;
      }
    }
    itr++
    previous = current;
    current = current._next;
  }

  return -1;
};

LinkedList.prototype.getAt = function(index) {
  var current = this._head;
  var itr = 0;

  while (current) {
    if (itr === index) {
      return current._data;
    }
    itr++
    current = current._next;
  }

  return -1;
};

LinkedList.prototype.contains = function(data) {
  var current = this._head;

  while (current) {
    if (current._data === data) {
      return true;
    }
    current = current._next;
  }

  return false;
};

LinkedList.prototype.remove = function(data) {
  var current = this._head;
  var previous = null;

  while (current) {
    if (data === current._data) {
      if (!previous) {
        this._head = current._next;
      } else {
        previous._next = current._next;
      }
      return;
    }
    previous = current;
    current = current._next;
  }
  return -1;
}

var linkedList = new LinkedList();
linkedList.insertLast(5);
linkedList.insertLast(6);
linkedList.insertLast(22);
linkedList.insertAt(100, 1);

