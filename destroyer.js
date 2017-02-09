
 // Provided with an initial array (the first argument in the destroyer function) followed by
 // one or more arguments, remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  
  // Call a function taking a "this" argument (arguments) as first param/argument.
  // In this case it's the 'arguments' variable of the function 'destroyer'.
  // This is used to fill new array 'args' with the destroyer func's arguments.
  var args = Array.prototype.slice.call(arguments);
  
  // Start at index 0, delete N (in this case 1) element from that point on.
  // This removes arr from the args array
  // eg. destroyer([1, 2, 3, 4], 2, 7) --> (2, 7)
  args.splice(0, 1);
  
  // For each element in arr, if it's not found in args, keep it in arr
  // If that element is also found in args, filter it out of arr.
  // Finally, return the filtered version of arr
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// [1, 1]