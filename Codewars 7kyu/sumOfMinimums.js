// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// then sum them to be 26


function sumOfMinimums(arr) {
    // P:given a nest array, will never be empty
    // R: return the sum of all the arrays
    // E: [[4,5], [6,8], [8,2]] => 12
    // P:use a for loop for the length then reduce each array then push them to a new array?
    let f = 0
    
    for(let i = 0; i < arr.length; i++){
   let k = arr[i].sort((a,b ) => a - b)
   f += k[0]
    }
    return f
  }