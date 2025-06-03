function divCon(x){
    console.log(x)
  let f = x.filter((num) => (typeof num) == 'string' )
  let k = x.filter((num) => (typeof num) == 'number' )
  f = f.reduce((acc, curr) => Number(acc) + Number(curr), 0)
  k = k.reduce((acc, curr) => Number(acc) + Number(curr), 0)
  return k - f
  }