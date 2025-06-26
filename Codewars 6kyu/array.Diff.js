function arrayDiff(a, b) {
    // P: given two arrays with integars
    // R: return the integars from the the first list that are not in the second list then return the first list
    // E: a = [1, 2] b = [2] => [1], a = [1, 2, 2, 2, 3] b = [2] => [1,3]
    // P: use a filter on the a array, then maybe use includes to remove the items that are not in b
    
    
    return a.filter((e) => {
      return !b.includes(e)
    })
    
  }