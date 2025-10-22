function well(x){
    // P: given a array
    // R: return a string
    // E: ['good'] => 'Publish!'
    // P: use a filter then use length?
     let k = x.filter((word) => word === 'good')
   if(k.length == 0){
     return 'Fail!'
   }else if(k.length == 1 || k.length == 2){
     return 'Publish!'
   }else{
     return 'I smell a series!'
   }
   } 