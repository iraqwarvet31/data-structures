describe("linkedList", function () {
  var linkedList;
  var expect = chai.expect;
  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it("LinkedList should have a head and size property", function() {
    expect(linkedList).to.have.property("_head");
    expect(linkedList).to.have.property("_size");
  });

  it("Node should have a data and next property", function() {
    var node = new Node(3);
    expect(node).to.have.property("_data");
    expect(node).to.have.property("_next");
  });

  it('Should have methods "insertFirst", "insertLast", "insertAt"', function() {
    expect(linkedList.insertFirst).to.be.a("function");
    expect(linkedList.insertLast).to.be.a("function");
    expect(linkedList.insertAt).to.be.a("function");
  });

  it('Should have methods "getAt", "getIndex, "contains"', function() {
    expect(linkedList.getAt).to.be.a("function");
    expect(linkedList.getIndex).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('Should have methods "removeAt", "clearList", "printList"', function() {
    expect(linkedList.removeAt).to.be.a("function");
    expect(linkedList.clearList).to.be.a("function");
    expect(linkedList.printList).to.be.a("function");
  });

  it("insertFirst should add a new value to the beginning of the linkedList", function() {
    linkedList.insertFirst(20);
    expect(linkedList._head).to.equal(20);
  });

  it("insertLast should add new value to the end of the linkedList", function() {
    linkedList.insertLast(7);
    expect(linkedList._tail).to.equal(7);
  });

  it('insertAt should add a value to the specified index', function() {
    linkedList.insertAt(50, 3);
    expect(linkedList.getIndex(3)).to.equal(50);
  });

  it('getAt should return value at given index', function() {
    linkedList.insertFirst(2);
    linkedList.insertFirst(15);
    linkedList.insertFirst(3);
    expect(linkedList.getAt(1)).to.equal(15);
  });

  it('getIndex should return index of given value', function() {
    linkedList.insertFirst(20);
    linkedList.insertLast(100);
    expect(linkedList.getIndex(100)).to.equal(1);
  });

  it('contains should return true if given value is in linkedList', function() {
    linkedList.insertFirst(4);
    linkedList.insertLast(20);
    expect(linkedList.contains(4)).to.equal(true);
  });

  it('contains should return false if given value is not in linkedList', function() {
    linkedList.insertFirst(96);
    expect(linkedList.contains(3)).to.equal(false);
  });

  it('Should remove given value from linkedList', function() {
    linkedList.insertFirst(33);
    linkedList.removeAt(33, 0);
    expect(linkedList.contains(33)).to.equal(false);
  });
});
