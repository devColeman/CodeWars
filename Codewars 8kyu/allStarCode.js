function strCount(str, letter){  
    // P: given two strings
    // R: return a integer
    // E: 'bob' 'b' => 2
    // P: split the string then filter for the letter then return length
    str = str.split('').filter((n) => n == letter)
    return str.length
  }