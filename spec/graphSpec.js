describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  })

  it('should have methods named "insertNode"', function() {
    expect(graph.addNode).to.be.a('function');
  })
})