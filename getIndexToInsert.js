/*
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted.
The returned value should be a number.
*/

function getIndexToInsert(arr, num) {
 
  // anonymous function passed to sort() to make it sort by numeric sizes
  var sorted = arr.sort(function(a, b) {
	// eg. if 'b' is bigger than 'a', returns a negative value. -/0/+ determines what sort does.
    return a - b;
  });
  
  for (var i = 0; i < sorted.length; i++){
    
    if (num <= sorted[i]){
      return i;
    }
  }
  // otherwise, we know the index we want is one more than the current last index
  return sorted.length;
}

getIndexToInsert([0, 1, 3, 4, 9], 0.5); // 1 (the value "1" that was index 1 becomes index 2)
getIndexToInsert([0, 1, 3, 4, 9], 1); // 1 (the value "1" that was index 1 becomes index 2)
getIndexToInsert([0, 1, 3, 4, 9], 10); // 5