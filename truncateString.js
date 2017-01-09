
function truncateString(str, num) {
  
  if (str.length > num) {
    if (num <= 3) {
      return str.slice(0, num) + "...";
    }
    else {
      return str.slice(0, num - 3) + "...";
    }
  }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
// A-tisket...

truncateString("A-", 1);
// A...

truncateString("asd", 1);
// asd
