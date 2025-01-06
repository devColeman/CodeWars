//  [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]


function flattenAndSort(array) {
    // P: given a array of with interger or given a array that is empty
    // R: if the array is empty return a array
    // E: [1] => [1], [] => [], [4,6], [6,8] => [4,6,6,8]
    // P: use the concat method to add the arrays then the sort() method to sort the array
    // we concat all of the array of array into a new array then returned the new array f sorted
  
    
   let f = []
   
   for(let i = 0; i < array.length; i++){
     
    f = f.concat(array[i])
     }
    f = f.sort((a,b ) => a - b)
    console.log(f.length)
    if(f.length === 0){
      return []
    }else{
      return f
    }
}