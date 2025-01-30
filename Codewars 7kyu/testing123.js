// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number=function(array){
    //your awesome code here
    let f = []
    let k = 1
    
    array.forEach((h, i) => {
      
      f.push(`${k}: ${h}`)
      k++
     })
    
    
    return f
  }