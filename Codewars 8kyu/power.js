function numberToPower(number, power){
    console.info(Math.log2(1024));
    let k = 1
    for(let i = 1; i <= power; i++){
       k = k * number
    }
    return k
  }