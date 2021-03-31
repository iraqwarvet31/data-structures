describe("hashTable", function() {
  var hashTable;
  var buckets = [
    ["nemo", "fish"],
    ["coconut", "cat"],
    ["milo", "dog"],
    ["fido", "dog"],
    ["araceli", "human"],
    ["Leonardo", "turtle"],
    ["Splinter", "rat"],
    ["tweety", "bird"],
    ["mini", "mouse"],
    ["willy", "coyote"],
  ];
  var expect = chai.expect;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('HashTable constructor should have a _storage property as empty array', function() {
    expect(hashTable._storage).to.be.an('array');
  })

  it('HashTable constructor should a _limit property set to 8', function() {
    expect(hashTable._limit).to.be.equal(8);
  })

  it('HashTable constructor should have a _count property set to 0', function() {
    expect(hashTable._count).to.be.equal(0);
  })

  it('Should have "hash", "insert", "remove", "retrieve", and "resize"', function() {
    expect(hashTable.hash).to.be.a("function");
    expect(hashTable.insert).to.be.a("function");
    expect(hashTable.remove).to.be.a("function");
    expect(hashTable.retrieve).to.be.a("function");
  });

  it("Should store values that were inserted", function() {
    hashTable.insert("beau", "person");
    expect(hashTable.retrieve("beau")).to.equal("person");
  });

  it("Should overwrite values that have the same key", function() {
    hashTable.insert("rex", "cat");
    hashTable.insert("rex", "dinosour");
    expect(hashTable.retrieve("rex")).to.equal("dinosour");
  });

  it("Should not contain values that were removed", function() {
    hashTable.insert("tux", "penguin");
    hashTable.remove("tux");
    hashTable.insert("kermit", "frog");
    hashTable.remove("kermit");
    console.log(hashTable)
    expect(hashTable.retrieve("tux")).to.equal(undefined || null);
    expect(hashTable.retrieve("kermit")).to.equal(undefined || null);
  });

  it("Should handle collisions", function () {
    hashTable.insert("rex", "dinosour");
    hashTable.insert("beau", "person");
    expect(hashTable.retrieve("rex")).to.equal("dinosour");
  });

  it("Storage should double in size when becoming 3/4 full", function() {
    buckets.forEach(bucket => {
      hashTable.insert(bucket[0], bucket[1]);
    })
    expect(hashTable._storage.length).to.equal(16);
  });

  it("Storage should 1/2 when needed", function() {
    buckets.forEach(bucket => hashTable.insert(bucket[0], bucket[1]))
    hashTable.remove("nemo");
    hashTable.remove("cocunut");
    hashTable.remove("milo");
    hashTable.remove("fido");
    hashTable.remove("araceli");
    hashTable.remove("Leonardo");
    hashTable.remove("Splinter");
    hashTable.remove("tweety");
    expect(hashTable._storage.length).to.equal(2);
  })
});
