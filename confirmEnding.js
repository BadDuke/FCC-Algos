
function confirmEnding(str, target) {
  
  var startPoint = (str.length - target.length);
  return str.substring(startPoint, str.length) === target;
  
}

confirmEnding("Bastian", "n");
// true