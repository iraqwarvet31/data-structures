HashTable.prototype.hash = function(str, max) {
  var hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + str[i].charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};