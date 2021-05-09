describe('graph', function() {
  var graph;
  var expect = chai.expect;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addVertex"', function() {
    expect(graph.addVertex).to.be.a('function');
  });

  it('should add vertex to graph', function() {
    graph.addVertex(1);
    expect(graph.vertex.has(1)).to.equal(true);
  });

  it('should add edge to adjacency list', function() {
    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(1, 4);
    graph.addEdge(1, 3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    expect(graph.vertex.get(0).includes(1)).to.equal(true);
    expect(graph.vertex.get(1).includes(0)).to.equal(true);
    expect(graph.vertex.get(3).includes(4)).to.equal(true);
  });

  it('should return true if graph contains value', function() {
    graph.addVertex(105);
    expect(graph.contains(105)).to.equal(true);
  });

  it('should return false if graph does not contain given value', function() {
    graph.addVertex(105);
    expect(graph.contains(3)).to.equal(false);
  });

  it('should remove edges between 2 vertices', function() {
    graph.addVertex(0);
    graph.addVertex(1);
    graph.addEdge(0, 1);
    graph.removeEdge(0, 1);
    expect(graph.vertex.get(0).length).to.equal(0);
    expect(graph.vertex.get(1).length).to.equal(0);
  });

  it('should remove given vertex and all it\'s edges', function() {
    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(1, 4);
    graph.addEdge(1, 3);
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.removeVertex(0);
    expect(graph.vertex.has(0)).to.equal(false);
    expect(graph.vertex.get(1).includes(0)).to.equal(false);
    expect(graph.vertex.get(4).includes(0)).to.equal(false);
  });
});

/*
queue = 3, 4, 5, 6, 7
visited =  0, 1, 2, 3, 4, 5, 6, 7


*/