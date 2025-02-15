function solution(number){
    // P: given a integer can be negative
    // R: return the sum of any multiples of 3 and 5
    // E: 5 => 8(3,5), 10 => 23(3,5,6,9)
    // P: use a if statement if the number is negative return 0, then use a for loop inside the loop use 
    let sum = 0
    if( number < 0){
      return 0
    } else{
      for(let i = 0; i < number; i++){
       
        if(i % 3 === 0 || i % 5 === 0){
          sum += i
        }
        
      }
      return sum
    }
    
  }