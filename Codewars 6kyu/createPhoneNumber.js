// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
    // P:given a array with 10 integers
    // R: return the numbers in "(123) 456-7890" format
    // E:[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => "(123) 456-7890"
    // P: slice all of the numbers out then return a template literal
    //Should work??
    let firstPart = numbers.slice(0, 3).join('')
    let middlePart = numbers.slice(3,6).join('')
    let lastPart = numbers.slice(6, 10).join('')
    return `(${firstPart}) ${middlePart}-${lastPart}`
  }