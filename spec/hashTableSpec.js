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

  it("Should overwrite values that have the same key", function() {
    hashTable.insert("rex", "cat");
    hashTable.insert("rex", "dinosour");
    expect(hashTable.retrieve("rex")).to.equal("dinosour");
  })

  it("Should not contain values that were removed", function() {
    hashTable.insert("tux", "penguin");
    hashTable.insert("rex", "dinosour");
    hashTable.remove("tux");
    expect(hashTable.retrieve("tux")).to.equal(undefined);
  })

  it("Should handle collisions", function() {
    hashTable.insert("rex", "dinosour");
    hashTable.insert("beau", "person");
    expect(hashTable.retrieve("rex")).to.equal("dinosour");
  })

  it("Storage should double in size when becoming 3/4 full", function() {
    hashTable.insert("nemo", "fish");
    hashTable.insert("coconut", "cat");
    hashTable.insert("milo", "dog");
    hashTable.insert("fido", "dog");
    hashTable.insert("araceli", "human");
    hashTable.insert("Leonardo", "turtle");
    hashTable.insert("Splinter", "rat");
    expect(hashTable._storage.length).to.equal(16);
  })
})




