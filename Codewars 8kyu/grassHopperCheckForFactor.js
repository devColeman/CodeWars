function checkForFactor (base, factor) {
    // P: given two integers
    // R: return a boolean
    // E: 9,2 => false
    // P: check if the factor goes into the base 
    return base % factor === 0 ? true : false;
  }