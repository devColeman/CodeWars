function bald(x){
    let k = x.split('').slice()
    let f = k.filter((hair) => hair === '/')
    
    if(f.length == 0){
      return [x, "Clean!"]
    } else if(f.length == 1){
     return [x.replaceAll('/', '-'), "Unicorn!"]
  }else if(f.length == 2){
     return [x.replaceAll('/', '-'), "Homer!"]
  }else if(f.length >= 3 || f.length >= 5){
     return [x.replaceAll('/', '-'), "Careless!"]
  }else {
     return [x.replaceAll('/', '-'), "Hobo!"]
  }
    
  
  }