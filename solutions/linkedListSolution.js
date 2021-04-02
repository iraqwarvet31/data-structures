var LinkedList = function() {
  this._head = null;
  this._size = 0;
}

var Node = function(data, next = null) {
  this._data = data;
  this._next = next;
}

LinkedList.prototype.insertFirst = function(data) {
  this._head = new Node(data, this._head)
  this._size++;
};

LinkedList.prototype.insertLast = function(data) {
  var node = new Node(data);

  if (!this._head) {
    this._head = node;
    return;
  }

  var current = this._head;

  while (current._next) {
    current = current._next;
  }

  current._next = node;
  this._size++;
};

LinkedList.prototype.getIndex = function(data) {
  var current = this._head;
  var index = 0;

  while (current) {
    if (current._data === data) {
      return index;
    }
    index++
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
      if (previous === null) {
        this._head = node;
      } else {
        previous._next = node;
      }
      node._next = current;
      this._size++
      return;
    }
    itr++
    previous = current;
    current = current._next;
  }

  return null;
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

  return null;
}

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

LinkedList.prototype.printList = function() {
  var str = '';
  var current = this._head;

  while (current) {
    str += `${current._data} --> `;
    current = current._next;
  }

  return str.trim();
};

LinkedList.prototype.remove = function(data) {
  var current = this._head;
  var previous = null;

  while (current) {
    if (current._data === data) {
      if (previous === null) {
        this._head = current._next;
      } else {
        previous._next = current._next;
      }
      this._size--
      return current._data;
    }
    previous = current;
    current = current._next;
  }

  return -1;
};


/*
LinkedList = {
  head: {
    data: 7,
    next: {
      data: 8,
      next: {
        data: 10,
        next: {
          data: 65,
          next: null
        }
      }
    }
  }
}
*/