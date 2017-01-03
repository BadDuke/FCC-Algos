
function findLongestWord(str) {
  
  strArr = str.split(" ");
  wordLen = 0;
  
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i].length > wordLen) {
      wordLen = strArr[i].length;
    }
  }
  
  return wordLen;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
