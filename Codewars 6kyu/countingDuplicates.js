// "abcde" -> 0 # no characters repeats more than once 
// "aabbcde" -> 2 # 'a' and 'b' 
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`) "indivisibility" -> 1 # 'i' occurs six times 
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice 
// "aA11" -> 2 # 'a' and '1' 
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(str){
    // P: given a string with only alphabets and numbers, or a empty string
    // R: retun a number of how many duplicates there are
    // E: "abcde" => 0, "aabbcde" => 2, "aA11" => 2
    // P: i could use a includes to check if the letter is within the str then push 1 to the total sum
    // 
    
   str = str.toLowerCase()
    
  let f = {}
  
  for(let n of str){
    f[n] = (f[n] || 0) + 1
  }
    
  
    
  let k = 0
  
  for (let count of Object.values(f)){
    
    if(count > 1){
      k++
    }
  }
    
    return k
   
      
      
    
    
  }