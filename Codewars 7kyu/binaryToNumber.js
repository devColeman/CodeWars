// [0, 0, 0, 1] ==> 1
// [0, 0, 1, 0] ==> 2
// [0, 1, 0, 1] ==> 5
// [1, 0, 0, 1] ==> 9


const binaryArrayToNumber = arr => {
    let k = arr.join("")
    let f = parseInt(k, 2)
    return f
  };