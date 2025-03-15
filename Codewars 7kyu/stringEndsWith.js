function solution(str, ending){
    // P: given a two strings
    // R: return a boolean
    // E: 'devin' and 'vin' => true, 'bob' and 'oz' => false 
    // P: slice the first str based of ending length then compared
   
    return str.split("").splice(ending.length * -1).join('') === ending ? true : false
  }