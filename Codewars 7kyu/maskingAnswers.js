// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""



function maskify(cc) {

    if(cc.length <= 4){
      return cc
    }else{
      
      let f = cc.split('')
    let k = f.length
    
    let z = f.splice(f.length - 4, f.length)
    z = z.join('')
      
    
    f = f.map((word, i) => word[i] = "#")
    f = f.join('')
      
      return f + z
     }
    }