function min(arr, toReturn) { 
    if(toReturn == 'value'){
      arr = arr.sort((a,b) => a - b)
      return arr[0]
     
    }else{
    
     let k = arr.filter((n) => {})
     k = k.sort((a,b) => a - b)
     let f = k[0]
     let z = k.indexOf(f)
     console.log(f)
      console.log(arr)
    }
}