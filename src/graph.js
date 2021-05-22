var Graph = function() {
  this.vertex = new Map();
};

Graph.prototype.addVertex = function(vertex) {
  const itExists = this.vertex.get(vertex);

  if (itExists) return null;

  this.vertex.set(vertex, []);
};

Graph.prototype.addEdge = function(source, destination) {
  const sourceList = this.vertex.get(source);
  const destinationList = this.vertex.get(destination);

  if (!sourceList || !destinationList) return null;

  sourceList.push(destination);
  destinationList.push(source);
};

Graph.prototype.contains = function(data) {
  const sourceList = this.vertex.get(data);

  if (sourceList) return true;

  return false;
};

Graph.prototype.removeEdge = function(source, destination) {
  let sourceList = this.vertex.get(source);
  let destinationList = this.vertex.get(destination);

  sourceList = sourceList
    .filter(edge => edge !== destination);

  destinationList = destinationList
    .filter(edge => edge !== source);

  this.vertex.set(source, sourceList);
  this.vertex.set(destination, destinationList);
};

Graph.prototype.removeVertex = function(vertex) {
  let sourceList = this.vertex.get(vertex);

  sourceList.forEach((val, i) => {
    let targetList = this.vertex.get(val);

    targetList = targetList
      .filter(edge => edge !== vertex);

    this.vertex.set(val, targetList);
  })

  this.vertex.delete(vertex);
};

Graph.prototype.BFS = function(start) {

  // Solution 1
  const queue = [start];
  const visited = [];

  while (queue.length) {
    visited.push(queue.shift());

    let curr = visited[visited.length - 1];
    let currEdges = this.vertex.get(curr);

    currEdges.forEach(val => {
      if (!(visited.includes(val)) && !(queue.includes(val))) {
        queue.push(val);
      }
    })
  }
  return visited;
}

Graph.prototype.DFS = function(start) {

}

/*
GRAPH1 = {
  0: [1, 4],
  1: [0, 4, 3, 2],
  2: [1, 3],
  3: [1, 2, 4],
  4: [0, 1, 3]
}

GRAPH2 = {
  1: [4, 2],
  2: [1, 3, 5, 7, 8],
  3: [4, 2, 10, 9],
  4: [1, 3],
  5: [6, 2, 7, 8],
  6: [5],
  7: [8, 2, 5],
  8: [2, 5, 7],
  9: [3],
  10: [3]
}
*/