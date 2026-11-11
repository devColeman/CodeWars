function array(string) {
    // P: given a string
    // R: return a string
    // E: '2,4,5' => '4'
    // P: use pop and and push to from the first and last one
      let k = string.split(',')
      let z = k.pop()
      let f = k.shift()
      if(k.length > 0){
        return k.join(' ')
      }else{
        return null
      }
    
    }