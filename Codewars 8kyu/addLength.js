function addLength(str) {
    // P: given a string return a array with the lenght of the string 'word number' format ex: 'ben 3'
    // R: return a array
    // E: "apple ban" => ["apple 5", "ban 3"], "you will win" => ["you 3", "will 4", "win 3"]
    // P: split the string then use a map or foreach to change the item
    let f = []
    str.split(' ').forEach((word, i) => {
      f.push(`${word} ${word.length}`)
    })
  
     return f
  }
  