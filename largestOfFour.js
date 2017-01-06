function largestOfFour(arr) {
	
  return arr.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}

// Easier and perhaps more readable than this way:

function largestOfFour(arr) {
  
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    newArr.push(Math.max(arr[i][0], arr[i][1], arr[i][2], arr[i][3]));
  }
  return newArr;
}