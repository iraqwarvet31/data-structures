var LinkedList = function() {
  this._head = null;
  this._size = 0;
};

var Node = function(data, next = null) {
  this._data = data;
  this._next = next;
};

LinkedList.prototype.insertFirst = function(data) {
  this._head = new Node(data);
  this._size++
};

LinkedList.prototype.insertLast = function(data) {
  var node = new Node(data);
  var current = this._head;

  if (!current) {
    this.insertFirst(data);
    return;
  }
  while (current._next) {
    current = current._next;
  }
  current._next = node;
  this._size++;
};

LinkedList.prototype.getIndex = function(data) {
  var current = this._head;
  var count = 0;

  while (current) {
    if (current._data === data) {
      return count;
    }
    current = current._next;
    count++;
  }
  return null;
};

LinkedList.prototype.insertAt = function(data, index) {
  if (index === 0) {
    return this.insertFirst(data);
  }

  if (index > this._size) {
    return null;
  }

  var current = this._head;
  var node = new Node(data);
  var previous = current;
  var itr = 0;

  while (itr < index - 1) {
    itr++
    previous = current._next;
    current = previous._next;
  }

  node._next = current;
  previous._next = node;
  this._size++;

  console.log(this);
  // if (index > this._size) {
  //   return false;
  // }

  // if (index === 0) {
  //   this.insertFirst(data);
  // } else {
  //   var node = new Node(data);
  //   var current = this._head;
  //   var it = 0;
  //   var previous;

  //   while (it < index) {
  //     it++;
  //     previous = current;
  //     current = current._next;
  //   }
  //   previous._next = node;
  //   node._next = current;
  // }
  // this._size++;
};
/*
 var list = {
   head: {
     data: 4,
     next: {
       data: 5,
       next: {
         data: 6,
         next: null
       }
     }
   }
}

{head: Node, _size: 1};
     {_data: 4, next: Node}
           {_data: 6, next: Node}
*/