// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]





function removeSmallest(numbers) {
    // P: given a array of numbers, the array could also be emtpy
    // R: return the array without changing the original array
    // E: [] => [] [5,6,6,7] => [6,6,7] 
    // P: maybe sort he array then pop the value to a variable then filter the number out?
    if(numbers.length === 0){
      return []
    }
    const smallestIndex = numbers.indexOf(Math.min(...numbers));
    
    return numbers.filter((el, i) => i !== smallestIndex)
   
  }