function stray(numbers) {
    // P: given a array on numbers
    // R: return a integer
    // E: [5,6,5,5,5,] return 6
    // P: use a sort then grab the last item
    let k = numbers.sort()
    if(k[0] === k[k.length -1 ]) {
      return k[0]
    }else {
      return k[k.length - 1]
    }
    
  }