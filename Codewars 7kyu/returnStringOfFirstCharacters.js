function makeString(s){
    // P: given a string with space inside it
    // R: return a new string with only the first letters of the words
    // E: "Hello World" => "HW"
    // P: maybe just split he string then make a new array by pushing the first letter in the arrays
    let z = []
    let k = s.split(' ')
    k = k.forEach((n) => {
      z.push(n[0])
    })
    
    return z.join('')
    
  }