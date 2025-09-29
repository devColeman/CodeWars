function twoHighest(arr) {
    // P: given a array
    // R: return a array of the two hightest numbers
    // E: [4,6,7,3] => [7,6]
    // P: use a sort then pop the last two if there is one then return the array
  
    if(arr.length == 0 ){
      return []
    }else if(arr.length == 1) {
     return arr
    } else {
      arr.sort((a,b) => b - a)
      let k = [...new Set(arr)]
      return [k[0], k[1]]
    }
  }