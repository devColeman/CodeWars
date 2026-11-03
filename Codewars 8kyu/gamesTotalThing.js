function points(games) {
    // P: given a array of strings
    // R: return a number
    // E: ["5:2"] => 3
    // P: lets have number variable that we add onto using a forEach
    
    let f = 0
    games.forEach((e) =>{
      e = e.split(':')
      if(e[0] > e[1]){
        f = f + 3
      }else if(e[0] == e[1]){
        f = f + 1
      }
    })
      return f
    }