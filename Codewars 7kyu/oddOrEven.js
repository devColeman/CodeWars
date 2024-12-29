// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"



function oddOrEven(array) {
    // P: a array either empty or with numbers
    // R: return a string that say either 'even' or 'odd'
    // E: [5,6,5] => 'even', [] => 'even' , [0] => 'even' , [1] => 'odd'
    // P: reduce the array, then use conditions to check if its odd or even, you add the reduce into the conditonal
    
    
    if(!Array.isArray(array) || array.length === 0){
      return 'even'}
    
    if( array.reduce((acc, curr) => acc + curr) === 0){
      return 'even'
    }else if (array.reduce((acc, curr) => acc + curr) === 1){
      return 'odd'
    } else if (array.reduce((acc, curr) => acc + curr ) % 2 === 0){
      return 'even'
    }else {
      return 'odd'
    }
    }