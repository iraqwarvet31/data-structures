describe('binarySearchTree', function() {
  var binarySearchTree;

  var expect = chai.expect;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });


  it('BinarySearchTree should have a _root property', function() {
    expect(binarySearchTree).to.have.property('_root');
  });

  it('Node should have _data, _left, and _right properties', function() {
    var node = new Node(7);

    expect(node).to.have.property('_data');
    expect(node).to.have.property('_left');
    expect(node).to.have.property('_right');
  });

  it('Should have methods "insert", "search", "contains", "remove"', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.search).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.remove).to.be.a("function");
  });

  it('Should insert node into an empty binarySearchTree', function() {
    binarySearchTree.insert(8);
    expect(binarySearchTree._root._data).to.equal(8);
  })

  it('Should insert node to correct location of binary search tree', function() {
    binarySearchTree.insert(11);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    expect(binarySearchTree._root._left._left._data).to.equal(1);
  });

  it('search should return the node with given value', function() {
    binarySearchTree.insert(12);
    binarySearchTree.insert(92);
    expect((binarySearchTree.search(12)._data)).to.equal(12);
    expect((binarySearchTree.search(92)._data)).to.equal(92);
  });

  it('search should return -1 if node wasn\'t found', function() {
    binarySearchTree.insert(15);
    binarySearchTree.insert(12);
    expect((binarySearchTree.search(100))).to.equal(-1);
  })


  it('Contains should return true if given value was found', function() {
    binarySearchTree.insert(101);
    binarySearchTree.insert(2);
    expect(binarySearchTree.contains(2)).to.equal(true);
  });

  it('Contains should return false if given value was not found', function() {
    binarySearchTree.insert(101);
    binarySearchTree.insert(2);
    expect(binarySearchTree.contains(55)).to.equal(false);
  })

  it('Should remove a specified node', function() {
    binarySearchTree.insert(8);
    binarySearchTree.insert(3);
    binarySearchTree.insert(14);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.remove(3);
    expect(binarySearchTree._root._left._data).to.equal(4);
  })


  it('Should include methods breadthFirst and depthFirst', function() {
    expect(binarySearchTree.breadthFirst).to.be.a("function")
    expect(binarySearchTree.depthFirst).to.be.a("function")
  })

  it('Should execute a function on every value via "depth-first', function() {
    var arr = [];
    var pushAll = function(data) { arr.push(data)};
    binarySearchTree.insert(10);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(20);
    binarySearchTree.depthFirst(pushAll);
    expect(arr).to.eql([10, 6, 3, 8, 15, 20]);
  });

  it('Should execute a function on every value via "breadthFirst"', function() {
    var arr = [];
    var pushAll = function(data) { arr.push(data) };
    binarySearchTree.insert(12);
    binarySearchTree.insert(9);
    binarySearchTree.insert(5);
    binarySearchTree.insert(10);
    binarySearchTree.insert(92);
    binarySearchTree.insert(33);
    binarySearchTree.insert(150);
    binarySearchTree.breadthFirst(pushAll);
    expect(arr).to.eql([12, 9, 92, 5, 10, 33, 150])
  })
});