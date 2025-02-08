function min(arr, toReturn) { 
  let f = arr.map((n) => n).sort((a,b) => a - b)
 
  let k = f[0]
 let z = arr.indexOf(k)
  
 if(toReturn === 'value'){
   return k
 } else {
   return z
 }
  

}