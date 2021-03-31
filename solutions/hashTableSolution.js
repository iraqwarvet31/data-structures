var HashTable = function() {
  this._storage = [];
  this._limit = 8;
  this._count = 0;
};

HashTable.prototype.hash = function(str, max) {
  var hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + str[i].charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    var bucket = [];
    this._storage[index] = bucket;
  }

  var hasConflict = false;

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket[i][1] = value;
      hasConflict = true;
    }
  }

  if (!hasConflict) {
    bucket.push([key, value]);
    this._count++

    // resize?
    if (this._count > this._limit * 0.75) {
      this.resize(this._limit * 2);
    }
  }

  return this;
};

HashTable.prototype.remove = function(key) {
  var index = this.hash(key, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return null;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      this._count--;
      // resize?

      if (this._count < this._limit * 0.5) {
        this.resize(this._limit / 2);
      }
    }
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = this.hash(key, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return null;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      var value = bucket[i][1];
      return value;
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = [];
  this._limit = newLimit;
  this._count = 0;

  oldStorage.forEach(function(bucket) {
    if (!bucket) {
      return;
    }

    for (let i = 0; i < bucket.length; i++) {
      this.insert(bucket[i][0], bucket[i][1]);
    };
  }.bind(this));
};

