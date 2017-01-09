
function slasher(arr, howMany) {
// return an array with a specified number of elements removed from the head (front)
  
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
// [3]