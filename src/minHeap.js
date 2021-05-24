const MinHeap = function() {
  this.heap = [null];
  this.elements = 0;
}

MinHeap.prototype.insert = function(data) {
  if (!this.heap) this.heap.push(data);

  this.heap.push(data);

  const cIndex = this.heap.length - 1;
  const pIndex = Math.floor(cIndex / 2);
  this.perculateUp(pIndex, cIndex);
};


MinHeap.prototype.remove = function(data) {

};

MinHeap.prototype.perculateUp = function(pIndex, cIndex) {

  let parent = this.heap[pIndex];
  let child = this.heap[cIndex];

  if (!parent || parent < child) {
    return;
  }

  this.heap[pIndex] = child;
  this.heap[cIndex] = parent;

  let temp = pIndex;
  pIndex = Math.floor(pIndex / 2);
  cIndex = temp;
  this.perculateUp(pIndex, cIndex);  //2, 4
};

MinHeap.prototype.perculateDown = function(pIndex, cIndex) {

}
/*
 0     1   2   3   4   5   6   7  8
null, 3,   2, 36, 23, 38, 45, 57, 32
  p    c


*/