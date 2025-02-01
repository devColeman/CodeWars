function removeDuplicateWords (s) {
    s = s.split(' ')
    let f = new Set(s)
    const myArray = Array.from(f); 
    return myArray.join(' ')
  }