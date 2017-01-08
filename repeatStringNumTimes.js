
function repeatStringNumTimes(str, num) {
  
  var newStr = "";
  
  if (num < 1) {
    return newStr;
  }
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
// abcabcabc