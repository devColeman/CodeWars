function well(x){
    let f = 0
    x.map((x) => {
      if(x == 'good'){
        f = f + 1
      }
    })
      if(f > 2){
        return 'I smell a series!'
      }else if(f >= 1 ){
        return 'Publish!'
      }else{
        return 'Fail!'
      }
      
    }