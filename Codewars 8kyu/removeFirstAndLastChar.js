function array(string) {
    // P: given a string
    // R: return a a string without the first and last number of the string
    // E: '10,11,12,13' => '11 12', '' = NULL 
    // P: use a if statement to check the lenght of a string then return NULL if its under
    // 2 digits and if not pop and push the the first and last item
    
  //   console.log(string.split(',').length)
    
    if(string.split(',').length <= 2){
      return null
    }else {
      let f = string.split(',')
      let k = f.slice(1)
      let pop = k.pop()
      return k.join(' ')
    }
  }

  