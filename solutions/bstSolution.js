var BinarySearchTree = function () {
  this._root = null;
};

var Node = function (data) {
  this._data = data;
  this._left = null;
  this._right = null;
};

BinarySearchTree.prototype.insert = function (data) {
  var newNode = new Node(data);

  if (!this._root) {
    this._root = newNode;
    return;
  }

  var insertNode = function (node, newNode) {
    if (newNode._data < node._data) {
      if (node._left === null) {
        node._left = newNode;
      } else {
        insertNode(node._left, newNode);
      }
    } else {
      if (node._right === null) {
        node._right = newNode;
      } else {
        insertNode(node._right, newNode);
      }
    }
  };
  insertNode(this._root, newNode);
  return this;

  // SOLUTION 2 ***
  // var node = new Node(data);

  // if (!this._root) {
  //   this._root = node;
  //   return this;
  // }

  // var current = this._root;

  // while (current) {
  //   if (data < current._data) {
  //     if (current._left === null) {
  //       current._left = node;
  //       return this;
  //     }
  //     current = current._left;
  //   } else {
  //     if (current._right === null) {
  //       current._right = node;
  //       return this;
  //     }
  //     current = current._right;
  //   }
  // }
};

BinarySearchTree.prototype.search = function (data) {
  let current = this._root;

  while (current) {
    if (data < current._data) {
      current = current._left;
    } else if (data > current._data) {
      current = current._right;
    } else {
      return current;
    }
  }
};

BinarySearchTree.prototype.remove = function (data) {
  const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node._data) {
        // node has no children
        if (node._left == null && node._right == null) {
          return null;
        }
        // node has no left child
        if (node._left == null) {
          return node._right;
        }
        // node has no right child
        if (node._right == null) {
          return node._left;
        }
        // node has two children
        var tempNode = node._right;
        while (tempNode._left !== null) {
          tempNode = tempNode._left;
        }
        node._data = tempNode._data;
        node._right = removeNode(node._right, tempNode._data);
        return node;
      } else if (data < node._data) {
        node._left = removeNode(node._left, data);
        return node;
      } else {
        node._right = removeNode(node._right, data);
        return node;
      }
    }
    this._root = removeNode(this._root, data);
};

BinarySearchTree.prototype.contains = function (data) {
  let isFound = false;
  let current = this._root;

  while (current && !isFound) {
    if (current._data === data) {
      isFound = true;
      break;
    } else if (data < current._data) {
      current = current._left;
    } else if (data > current._data) {
      current = current._right;
    }
  }
  return isFound;
};

BinarySearchTree.prototype.depthFirst = function (callback) {
  var current = this._root;

  function traverse(node) {
    callback(node._data);
    if (node._left) traverse(node._left);
    if (node._right) traverse(node._right);
  }
  traverse(current);
};

BinarySearchTree.prototype.breadthFirst = function (callback) {
  var node = this._root;
  var queue = [];
  var visited = [];

  queue.push(node);

  while (queue.length) {
    visited.push(queue.shift());

    var left = visited[visited.length - 1]._left;
    var right = visited[visited.length - 1]._right;

    if (left) {
      queue.push(left);
    }

    if (right) {
      queue.push(right);
    }
  }

  visited.forEach(function (node) {
    callback(node._data);
  });
};

/*
binarySearchTree = {
  root: {
    data: 101,
    left: {
      data: 2,
      left: {
        data: 1,
        left: null,
        right: null
      }
    },
    right: {
      data: 11,
      left: {
        data: 7,
        left: null,
        right: null
      },
      right: {
        data: 96,
        left: null,
        right: null
      }
    }
  }
}
*/