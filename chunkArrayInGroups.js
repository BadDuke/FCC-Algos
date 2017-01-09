
function chunkArrayInGroups(arr, size) {
  
  var chunkMatrix = []; // hold arrays containing groups of characters
  
  // index hopping proportionate to the size of our character groups
  for (var i = 0; i < arr.length; i+=size) {
  
      // use size to determine our slice size and add that array to our matrix
      chunkMatrix.push(arr.slice(i, i+size));
  }
  return chunkMatrix;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
// [["a", "b"], ["c", "d",], ["e"]]