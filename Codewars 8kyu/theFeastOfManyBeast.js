function feast(beast, dish) {
    // P: given two string
    // R: return a boolean 
    // E: 'demon' and 'dough' => true, 'bat' and 'cookies' => true
    // P: use [] to check the first item in each string and compare
  
    
   
    return beast[0] == dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false
  }