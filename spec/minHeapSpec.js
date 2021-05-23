describe('MinHeap', function() {
  var maxHeap;
  var expect = chai.expect;

  beforeEach(function() {
    maxHeap = new MaxHeap();
  })

  it('Has methods insert and remove', function() {
    expect(maxHeap.insert).to.be.a('function');
    expect(maxHeap.remove).to.be.a('function');
  })

  it('Inserts element to correct location in heap', function() {
    maxHeap.insert(10);
    maxHeap.insert(23);
    maxHeap.insert(36);
    maxHeap.insert(32);
    maxHeap.insert(38);
    maxHeap.insert(45);
    maxHeap.insert(57);
    expect(maxHeap.heap).deep.to.equal([null, 10, 23, 36, 32, 38, 45, 57])
    maxHeap.insert(3);
    expect(maxHeap.heap).deep.to.equal([null, 3, 10, 36, 23, 38, 45, 57, 32])
  })
})

/*
Always start array at index 1

If a node is at index ==> i
its left child is at index ==> 2*i
its right child is at index ==> 2*i+1
its parent is at ==> i/2
*/