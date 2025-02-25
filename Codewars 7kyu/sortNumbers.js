function solution(nums){
    // P: given a array of numbers
    // R: return a array
    // E: [1, 2, 10, 50, 5] => [1,2,5,10,50]
    // P: do a if statement that has a check for null and or emtpy they use sort to sort the numbers
    
    if(nums === null || nums.length === 0){
      return []
    } else {
      return nums.sort((a, b) => a - b)
    }
  }
 