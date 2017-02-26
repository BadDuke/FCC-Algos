function rot13(str) {
  /*
  Takes a ROT13-encoded string as input and returns a decoded string.
  Expects alphabetical uppercase characters as encoded characters and
  does not transform any non-alphabetic characters, but passes them on.
  
  ROT13 encryption and decryption works in a way such that decrypting
  is done simply by encrpyting (moving 13 forward) again. Example:

  13 + 13 = 26 and alphabet has 26 letters, so every letter shifted in
  position by 26 ends up in the same place ('A' + 26 wraps back around to 'A')
  */
  
  // Split str into character array and iterate using map & callback function
  return str.split('').map.call(str, function(char) {
      
    // Convert char to character code
    var charCode = char.charCodeAt(0);
    
    // If the character is not an uppercase alphabetical character (A-Z)
    if (charCode < 65 || charCode > 90) {
      // Return un-converted character
      return String.fromCharCode(charCode);
    }
    
    // If the char is somewhere from A-M and ROT13 won't push it past 'Z'
    else if (charCode < 78) {
      // Decrypt it by shifting 13 forward, convert it, then return it
      return String.fromCharCode(charCode + 13);
    }
    // At this point it must be between N-Z, so we subtract 13 instead
    // This is to keep our char code between 65-90 and wrap back around
    return String.fromCharCode(charCode - 13);
    
    // Join the results back into a string and execute original return statement
    }).join('');
}

rot13("SERR PBQR PNZC"); // FREE CODE CAMP
rot13("aYl thR JaL. baby!"); // ALl thE WaY, baby!