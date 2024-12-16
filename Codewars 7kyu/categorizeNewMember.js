// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]



function openOrSenior(data){
    let k = []
     
     let newData = data.map((n, i) => {
       
      if(n[0] >= 55 && n[1] > 7){
       k.push('Senior')
     }else{
       k.push('Open')
     }
     })
     
    return k
   }