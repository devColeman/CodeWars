// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]



// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    // P: given a array of numbers 
    // R: return the a new array with the 2 highest numbers
    // E: [1, 2, 10, 8] --> [8, 10], [1, 3, 10, 0]) --> [3, 10]
    // P: we could sort the array then return a new array from the sorted array
    
    if(ages.length === 1){
      return []
    }else {
     ages = ages.sort((a,b) => a - b)
     console.log(ages)
      let z = [ages[ages.length - 2], ages[ages.length - 1]]
      return z
    }
    
  }