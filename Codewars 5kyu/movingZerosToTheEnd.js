// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let z = arr.filter((n) => n === 0)
    let f = arr.filter((n) => n !== 0)
    f = f.concat(z)
    return f
   
  }