


function toNumberArray(arr){
    // P: given a string that have number as strings, no need to handle emtpy cases
    // R: return the array with the string changed to numbers in the array
    // E: ["1", "2", "3"] => [1, 2, 3]
    // P: use forEach and use Number() for each array item then return it
   
  return arr.map((ele, i) => Number(ele))
    
   
  }