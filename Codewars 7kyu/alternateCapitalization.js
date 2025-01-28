// capitalize("abcdef") = ['AbCdEf', 'aBcDeF']



function capitalize(str){
    // P: given a str the only includes letters
    // R: return a array with two strings, in the first one alternate the capitaliztion on even and the on the 
    // second one go basedo on odd indexes
    // E: "abcdef" => ['AbCdEf', 'aBcDeF'], "codewarriors" => ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
    // P: maybe use indexOf after you split the string then use % 2=== 0 or % 2 !==2 for the ones that will be
    // capitalized
    
    str = str.split("")
    let j = []
    let f = []
    
    let z = str.map((l, i) => {
      if(i % 2 === 0){
        j.push(l.toUpperCase())
      }else{
        j.push(l)
      }
      
    })
   
   let k = str.map((l, i) => {
      if(i % 2 === 1){
        f.push(l.toUpperCase())
      }else{
        f.push(l)
      }
      
    })
   f = f.join('')
  j = j.join('')
   
    let p = []
    p.push(j)
    p.push(f)
    
  return p
    
   
  };