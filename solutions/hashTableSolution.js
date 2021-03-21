var HashTable = function() {
  // ** DO NOT CHANGE PROPERTIES **
  this._storage = [];
  this._limit = 8;
  this._count = 0;
};

HashTable.prototype.hash = function(str, max) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + str[i].charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};
