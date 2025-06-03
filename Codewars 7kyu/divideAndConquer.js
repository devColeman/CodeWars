function divCon(x){
    let f = x.filter((num) => (typeof num) == 'string' )
    let k = x.filter((num) => (typeof num) == 'number' )
    f = f.reduce((acc, curr) => Number(acc) + Number(curr))
    k = k.reduce((acc, curr) => Number(acc) + Number(curr))
    return k - f
    }