// 'CodEWaRs' => [0,3,4,6]
// 'aAbB' => [1,3]
// 'AAA' => [0,1,2]
// '' => []

var capitals = function (word) {
    // P: given a non-empty string of only lowercase and uppercase letters
    // R: return a array that had the indexs of all the captials
    // E: "CodEWaRs" => [0,3,4,6], "AAA" => [0,1,2], "" => []
    // P: make a empty array, then use a forEach to to check if its a captial letter then push the i into the array
    // to check for captial use word === word.toUpperCase()
    
    let f = []
    
    
    word.split('').forEach((word, i) => {
      if(word === word.toUpperCase()){
        f.push(i)
      }
    })
     return f
    
  };

