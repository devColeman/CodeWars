function catMouse(x){
    // P: given a string
    // R: return a string 
    // E: "C.....m" => "Escaped!" , "Escaped!" => "Caught!"
    // P: just check the length then return the string
  return x.length > 5 ? 'Escaped!' : 'Caught!'
  }