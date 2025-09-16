function divisibleBy(numbers, divisor){
    // P: given a array of numbers
    // R: return a array of number that ar divior by the number
    // E: [6,7,39] 3 => [3,39]
    // P: use a filter and return the array
      
      let k = numbers.filter((n) => n % divisor == 0)
      return k
    }