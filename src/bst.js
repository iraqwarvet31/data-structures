var BinarySearchTree = function() {
  this._root = null;
};

var Node = function(data) {
  this._data = data;
  this._left = null;
  this._right = null;
};

BinarySearchTree.prototype.insert = function(data) {
  var node = new Node(data);
  var current = this._root;

  if (!current) {
    this._root = node;
    return;
  }

  while (current) {
    if (data < current._data) {
      if (!current._left) {
        current._left = node;
        return this;
      }
      current = current._left;
    } else {
      if (!current._right) {
        current._right = node;
        return this;
      }
      current = current._right;
    }
  }
};

BinarySearchTree.prototype.search = function(data) {
  var current = this._root;

  while (current) {
    if (data === current._data) {
      return current;
    } else if (data < current._data) {
      current = current._left;
    } else {
      current = current._right;
    }
  }

  return -1;
};

BinarySearchTree.prototype.contains = function(data) {
  var current = this._root;

  while (current) {
    if (data === current._data) {
      return true;
    } else if (data < current._data) {
      current = current._left;
    } else {
      current = current._right;
    }
  }

  return false;
};

BinarySearchTree.prototype.remove = function(data) {
  function removeNode(node, data) {
    if (data === node._data) {
      if (!node._left && !node._right) return null;
      if (!node._left) return node._right;
      if (!node._right) return node._left;

      var tempNode = node._right;

      while (tempNode._left) {
        tempNode = tempNode._left;
      }

      node._data = tempNode._data;
      node._right = removeNode(node._right, node._data);
      return node;
    } else {
      if (data < node._data) {
        node._left = removeNode(node._left, data);
        return node;
      } else {
        node._right = removeNode(node._right, data);
        return node;
      }
    }
  }
  removeNode(this._root, data)
};

BinarySearchTree.prototype.breadthFirst = function(func) {
  var queue = [this._root];
  var visited = [];

  while (queue.length) {
    visited.push(queue.shift());

    var node = visited[visited.length - 1];
    func(node._data);

    if (node._left) queue.push(node._left);

    if (node._right) queue.push(node._right);
  }
};

BinarySearchTree.prototype.depthFirst = function(func) {
  if (!this._root) return null;

  function traverse(node) {
    func(node._data);
    if (node._left) traverse(node._left);
    if (node._right) traverse(node._right);
  }

  traverse(this._root)
};

// var binarySearchTree = new BinarySearchTree();
// var arr = [];
// var pushAll = function(data) { arr.push(data)};
// binarySearchTree.insert(8);
// binarySearchTree.insert(3);
// binarySearchTree.insert(14);
// binarySearchTree.insert(1);
// binarySearchTree.insert(6);
// binarySearchTree.insert(13);
// binarySearchTree.insert(17);
// binarySearchTree.insert(0);
// binarySearchTree.insert(4);
// binarySearchTree.insert(9);
// binarySearchTree.insert(16);
// binarySearchTree.insert(20);
// binarySearchTree.depthFirst(pushAll);