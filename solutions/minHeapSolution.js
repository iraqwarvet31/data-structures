const MinHeap = function() {
  this.heap = [null];
  this.elements = 0;
}

MinHeap.prototype.insert = function(data) {
  if (!this.heap) {
    this.heap.push(data);
    return;
  }

  this.heap.push(data);

  this.perculateUp(this.heap.length - 1);
};


MinHeap.prototype.removeMin = function() {
  if (!this.heap[1]) return null;

};

MinHeap.prototype.perculateUp = function(index) {
  while (index > 1) {
    let parent = Math.floor(index / 2);

    if (this.heap[parent] > this.heap[index]) {
      let temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;
    }
    index = parent;
  }
};

// MinHeap.prototype.perculateDown = function(pIndex, cIndex) {

// }

// MinHeap.prototype.swap = function(pIndex, cIndex) {
//   let val1 = this.heap[pIndex];
//   let val2 = this.heap[cIndex];
//   let temp = val1;

//   this.heap[pIndex] = val2;
//   this.heap[cIndex] = temp;
// }
// /*
