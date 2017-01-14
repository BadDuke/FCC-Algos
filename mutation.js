
function mutation(arr) {

  // extracting and formatting strings here for readability
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  
  // check first for each of second's letters
  for (var i = 0; i < second.length; i++) {
    // return false if any character from second is not in first
    if (first.indexOf(second[i]) === -1) {
      return false;
    }
  }
  
  return true;
}

mutation(["hello", "hey"]);
// false
