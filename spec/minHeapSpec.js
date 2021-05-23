describe('MinHeap', function() {
  var minHeap;
  var expect = chai.expect;

  beforeEach(function() {
    minHeap = new MinHeap();
  })

  it('Has methods insert and remove', function() {
    expect(minHeap.insert).to.be.a('function');
    expect(minHeap.remove).to.be.a('function');
  })

  it('Inserts element to correct location in heap', function() {
    minHeap.insert(10);
    minHeap.insert(23);
    minHeap.insert(36);
    minHeap.insert(32);
    minHeap.insert(38);
    minHeap.insert(45);
    minHeap.insert(57);
    expect(minHeap.heap).deep.to.equal([null, 10, 23, 36, 32, 38, 45, 57])
    minHeap.insert(3);
    expect(minHeap.heap).deep.to.equal([null, 3, 10, 36, 23, 38, 45, 57, 32])
  })
})

/*
Always start array at index 1

If a node is at index ==> i
its left child is at index ==> 2*i
its right child is at index ==> 2*i+1
its parent is at ==> i/2
*/