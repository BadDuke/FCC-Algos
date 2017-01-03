
function titleCase(str) {
  
  str = str.toLowerCase().split(' ');
  // ["i'm", "a", "little", "tea", "pot"]
  
  for (var i = 0; i < str.length; i++) {
    
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    // with slice we tack on the rest of the word from index 1 on...
  }
  
  return str.join(' '); // return to string and put spaces back in
}

titleCase("I'm a little tea pot");
