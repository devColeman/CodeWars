// (2, 4, -3) == true
// (4, -6, 9) == true
// (-4, 6, 0) == false
// (-14, -3, -4) == false

function twoArePositive(a, b, c) {
    // P: three different numbers, can be positive or negative
    // R: true or false
    // E: (5,6,0) == false, (5,-6,-6) == false, (5,6,-4) = true
    // P: we could do a totalSum that we 1 one if the number is positive,
    // then check if the number is equal to 2 if it is then return true
    let check = 0
    if(a > 0){
      check += 1
    }
     if(b > 0){
      check += 1
    }
     if(c > 0){
      check += 1
    }
    
    return check === 2 ? true: false
    
    
  }