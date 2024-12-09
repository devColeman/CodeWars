sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13"
sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6"


function sumTwoSmallestNumbers(numbers) {  
    let f = numbers.sort((a, b) => a - b)
    return f[0] + f[1]
   }