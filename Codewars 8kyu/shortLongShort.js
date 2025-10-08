function solution(a, b){
    // P: given two stings 
    // R: return a string
    // E: 'a' 'ab' => 'aaba'
    // P: use a if to see which is longer then return the string 
    
   if(a.length > b.length){
     return  `${b}${a}${b}`
   }else {
     return  `${a}${b}${a}`
   }
  }