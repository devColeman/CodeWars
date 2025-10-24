function liftoff(i){
    // P: given a array of integers
    // R: return a string that is based on the array given with the text of liftoff
    // E: [2,5,3,1,4] => '5 4 3 2 1 liftoff!'
    // [1,3,2] = > '3 2 1 liftoff!'
    // P: start by sorting the array.
    // then do a forEach to add a space to every array
    // then change it to a string and use template literal to return the string
    
   let k = i.sort((a,b) => b - a).join(' ')
  return `${k} liftoff!`
  }