function sumMix(x){
    // P: gvien a array of numbers and strings
    // R: return the sum of all the numbers
    // E: [4,6,7,'10'] => 27
    // P: use reduce and make sure its a number 
     return x.reduce((acc, int)=> {
       return Number(acc) + Number(int)
     })
    }