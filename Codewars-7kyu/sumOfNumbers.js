/* (1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) */


function getSum(a, b)
{
   if(a === b){
     return a
   }else{
     let k = []
     k.push(a)
     k.push(b)
     k.sort((a,b) => a - b)
     let f = k[0]
    let z = []
     
     for(let i = k[0]; i <= k[1]; i++){
      z.push(i) } 
     z = z.reduce((a,b) => a + b)
     return z
     
   }
}
