describe('hashTable', function() {
  var hashTable;
  var buckets = [['beau', 'person'], ['fido', 'dog'], ['rex', 'dinosour'], ['tux', 'penguin']];
  var expect = chai.expect;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('Should have methods named "insert", "remove", "retrieve", and "resize"', function() {
    expect(hashTable.insert).to.be.a("function");
    expect(hashTable.remove).to.be.a("function");
    expect(hashTable.retrieve).to.be.a("function");
  });

  it("Should store values that were inserted", function() {
    hashTable.insert("beau", "person");
    hashTable.insert("fido", "dog");
    expect(hashTable.retrieve("beau")).to.equal("person");
    expect(hashTable.retrieve("rex")).to.equal("dinosour");
  });
})
