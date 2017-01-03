
function factorialize(num) {
  
  total = 1;
  
  for (i = 1; i <= num; i++) {
   
    total *= i;
  }
  
  return total;
}

factorialize(5);