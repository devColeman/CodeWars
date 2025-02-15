function findOdd(a) {
    // P: given a array with integers, there will always be one integers that appears an odd number of times
    // R: return a integers
    // E: [7] => 7, [0,1,0,1,0] => 0
    // P: use a object to count the amount of items
    
    let f = {}
    
    a.forEach((n,i) => {
     f[n] = f.hasOwnProperty(n)  ?  f[n] + 1 : 1 ; 
      
      
    })
    
   for (const [key, value] of Object.entries(f)){
     
     
     if(value % 2 !== 0){
      return Number(key)
   }
     
       
     
  }}