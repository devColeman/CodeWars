function twoSort(s) {
    // P: given a array of strings
    // R: return the first value after the array has been sorted with three * between each letters
    // E: ['start, hello, bye'] => ['bye', 'hello', 'start']
    // P: sort then return the first array item the *
   s.sort()
    let word = s[0]
    word = word.split('')
    return word.join('***')
    console.log(word)
  }