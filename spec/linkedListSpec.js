describe("linkedList", function () {
  var linkedList;
  var expect = chai.expect;
  var methods = [];
  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it("LinkedList should have a head and size property", function () {
    expect(linkedList).to.have.property("_head");
    expect(linkedList).to.have.property("_size");
  });

  it("Node should have a data and next property", function () {
    var node = new Node(3);
    expect(node).to.have.property("_data");
    expect(node).to.have.property("_next");
  });

  it(`Should have methods "insertFirst", "insertLast",
      "getIndex", "insertAt", "contains", "getAt"`,
    function () {
      expect(linkedList.insertFirst).to.be.a("function");
      expect(linkedList.insertLast).to.be.a("function");
      expect(linkedList.getIndex).to.be.a("function");
      expect(linkedList.getAt).to.be.a("function");
      expect(linkedList.insertAt).to.be.a("function");
      expect(linkedList.contains).to.be.a("function");
  });

  it(`insertFirst should add a new value
      to the beginning of the linkedList`,
    function () {
      linkedList.insertFirst(20);
      linkedList.insertFirst(25);
      linkedList.insertFirst(4);
      expect(linkedList._size).to.equal(3);
      expect(linkedList._head._data).to.equal(4);
  });

  it("insertLast should add new value to the end of the linkedList",
    function () {
      linkedList.insertLast(7);
      linkedList.insertLast(8);
      linkedList.insertLast(10);
      linkedList.insertLast(65);
      expect(linkedList.getIndex(65)).to.equal(3);
  });

  it("getIndex should return index of given value", function () {
    linkedList.insertFirst(20);
    linkedList.insertLast(100);
    expect(linkedList.getIndex(100)).to.equal(1);
  });


  it("insertAt should add a value to the specified index", function () {
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    linkedList.insertLast(22);
    linkedList.insertAt(100, 1);
    expect(linkedList.getIndex(100)).to.equal(1);
  });

  it("insertAt should return false if attempting to add to an empty list", function () {
    expect(linkedList.insertAt(321, 2)).to.equal(null);
  });

  it("insertAt should insert value to at index 0 of linkedList", function () {
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    linkedList.insertLast(22);
    linkedList.insertAt(100, 0);
    expect(linkedList.getIndex(100)).to.equal(0);
  });

  it("insertAt should add a value to the specified index", function () {
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    linkedList.insertLast(22);
    linkedList.insertAt(100, 2);
    expect(linkedList.getIndex(100)).to.equal(2);
  });

   it(`insertAt should return null if inserting
      a value outside the index range`,
    function () {
      linkedList.insertFirst(20);
      linkedList.insertLast(330);
      expect(linkedList.insertAt(20, 3)).to.equal(null);
  });

  it("getAt should return value at given index", function () {
    linkedList.insertFirst(2);
    linkedList.insertFirst(15);
    linkedList.insertFirst(3);
    expect(linkedList.getAt(1)).to.equal(15);
    expect(linkedList.getAt(0)).to.equal(3);
  });

  it("contains should return true if given value is in linkedList",
    function () {
      linkedList.insertFirst(4);
      linkedList.insertLast(20);
      expect(linkedList.contains(4)).to.equal(true);
  });

  it("contains should return false if given value is not in linkedList",
    function () {
      linkedList.insertFirst(96);
      expect(linkedList.contains(3)).to.equal(false);
  });

  it('Should have methods "remove", "printList"', function () {
    expect(linkedList.remove).to.be.a("function");
    expect(linkedList.printList).to.be.a("function");
  });

  it('Should print the values of a linkedList', function () {
    linkedList.insertLast(20);
    linkedList.insertLast(2);
    linkedList.insertLast(96);
    expect(linkedList.printList()).to.equal('20 --> 2 --> 96 -->');
  })

  it("Should remove given value from linkedList", function () {
    linkedList.insertFirst(33);
    linkedList.removeAt(33, 0);
    expect(linkedList.contains(33)).to.equal(false);
  });
});

/*
var list = new LinkedList();
list.insertLast(23);
list.insertLast(2);
list.insertLast(55);
list.insertLast(43);
list.printList();
*/
