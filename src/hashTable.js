var HashTable = function() {
  // ** DO NOT CHANGE PROPERTIES **
  this._storage = [];
  this._limit = 4;
  this._count = 0;
};

HashTable.prototype.hash = function(str, max) {
  var total = 0;
  for (var i = 0; i < str.length; i+= 1) {
    total = (total << 5) + str[i].charCodeAt(0);
    total = (total & total) % max;
  }
  return total;
}
