describe('binarySearchTree', function() {
  var binarySearchTree;

  var expect = chai.expect;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree();
  });

  it('Should have methods "insert", "search", "contains", "remove"', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.search).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.remove).to.be.a("function");
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

  it('Should insert node to correct location of binary search tree', function() {
    binarySearchTree.insert(11);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    binarySearchTree.insert(96);
    expect(binarySearchTree._root._right._left).to.equal(7);
  });
})