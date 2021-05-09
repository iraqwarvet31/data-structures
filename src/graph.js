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

/*
nodes = {
  0: [1, 4],
  1: [0, 4, 3, 2],
  2: [1, 3],
  3: [1, 4, 2],
  4: [3, 0, 1]
}

*/